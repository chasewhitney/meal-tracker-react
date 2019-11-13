import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { NewMealFormFields } from "../../fields/fields.js";
import MealField from "../MealField/MealField.js";
import * as S from "./AddMealForm.jsx.js";

const validate = values => {
  // console.log('validation values:', values);
  const errors = {};

  if (Number(values.carbs) < Number(values.fiber) + Number(values.sugar)) {
    errors.carbs = "Total carbs cannot be less than sugar and fiber combined.";
    //  debugger;
  }

  for (let i = 0; i < NewMealFormFields.length; i++) {
    const { name } = NewMealFormFields[i];
    if (!values[name] && values[name] !== 0) {
      errors[name] = "Required";
    } else if (name !== "name" && name !== "servingSize") {
      if (isNaN(Number(values[name]))) {
        errors[name] = "Must be a number";
      } else if (Number(values[name]) < 0) {
        errors[name] = `${NewMealFormFields[i].label} must be a positive value`;
      }
    }
  }
  return errors;
};

const renderFields = fields => {
  return (
    <div>
      {fields.map(item => {
        return (
          <Field
            name={item.name}
            type={item.type}
            component={MealField}
            label={item.label}
            key={item.name}
          />
        );
      })}
    </div>
  );
};

let AddMealForm = props => {
  const { handleSubmit, submitting } = props;
  console.log("In AddMealForm with mealToAdd: ", props.mealToAdd);
  return (
    <form onSubmit={handleSubmit(props.onFormSubmit)}>
      {props.mealToAdd._id ? (
        <S.Header>Edit Meal</S.Header>
      ) : (
        <S.Header>Add Meal</S.Header>
      )}
      {renderFields(NewMealFormFields)}
      <S.ButtonDiv>
        <S.CancelButton
          type="button"
          disabled={submitting}
          onClick={props.onCancel}
        >
          Cancel
        </S.CancelButton>
        <S.SubmitButton type="submit" disabled={submitting}>
          Submit
        </S.SubmitButton>
      </S.ButtonDiv>
    </form>
  );
};

AddMealForm = reduxForm({
  form: "addMeal",
  validate
})(AddMealForm);

AddMealForm = connect((state, ownProps) => ({
  initialValues: ownProps.mealToAdd
}))(AddMealForm);

export default AddMealForm;
