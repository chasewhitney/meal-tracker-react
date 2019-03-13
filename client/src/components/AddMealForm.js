import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import newMealFields from './newMealFormFields';
import MealField from './MealField';

const validate = values => {
  // console.log('validation values:', values);
  const errors = {};
  if(Number(values.carbs) < Number(values.fiber) + Number(values.sugar)) {
    errors.carbs = "Total carbs cannot be less than sugar and fiber combined."
    debugger;
  }

  for(let i = 0; i < newMealFields.length; i++) {
    const { name } = newMealFields[i];
    if(!values[name] && values[name] !== 0){
      errors[name] = 'Required';
    } else if(name !== "name" && name !== "servingSize") {
      if (isNaN(Number(values[name]))) {
        errors[name] = 'Must be a number'
      } else if (Number(values[name]) < 0) {
        errors[name] = `${newMealFields[i].label} must be a positive value`;
      }
    }
  }
  return errors
}

const renderFields = (fields) => {
  return(
    <div>
      {fields.map(item => {
        return(
          <Field
            name={item.name}
            type={item.type}
            component={MealField}
            label={item.label}
            key={item.name}
          />
        )
      })}
    </div>
  )
}


let AddMealForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit(props.onFormSubmit)}>
      {renderFields(newMealFields)}
      <div>
        <button type="button" disabled={submitting} onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

AddMealForm = reduxForm({
  form: 'addMeal', validate
})(AddMealForm);

AddMealForm = connect(
  (state, ownProps) => ({
    initialValues: ownProps.mealToAdd
  })
)(AddMealForm);

export default AddMealForm;
