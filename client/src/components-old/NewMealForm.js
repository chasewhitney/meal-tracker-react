import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import newMealFormFields from './newMealFormFields';
import * as actions from '../actions';

const FormContainer = styled.div`
  background-color: white;
  width: auto;
`;

class NewMealForm extends Component {
  state = {itemToAdd: {}, apiDone: false};
  async componentDidMount() {
    if(this.props.addItem.id){
      // console.log('NMF MOUNTED:', this.props.addItem);
      const {id, type} = this.props.addItem;
      // console.log('id:', id);
      // console.log('type', type);
      // console.log('making call');
      await this.props.fetchApiItem(id, type);
      // console.log('call made');
      // console.log('this.props.apiItem', this.props.apiItem);
      this.setState({itemToAdd: this.props.apiItem, apiDone: true});
    }
    else {
      this.setState({apiDone: true});
    }
  }

  componentDidUpdate() {
    // console.log('NMF UPDATED');
    // console.log('this.props.apiItem', this.props.apiItem);
    // console.log('this.props:', this.props);
    // console.log('this.state:', this.state);
  }
  // componentDidUpdate(){
  //   console.log('updated with:', this.state.itemToAdd);
  // }


  handleChange = (e) => {
    const {name, value} = e.target;
    let itemToAdd = this.state.itemToAdd;
    itemToAdd[name] = value;
    this.setState({itemToAdd});
  }

  renderFields = () => {
    // console.log('NMF.state.foodItem:', this.state.apiItem);
    // console.log('this.props.state.apiItem:', this.props.state.apiItem);
      // console.log('apiDone:', this.state.apiDone);
      //
      // console.log('apiDone:', this.state.apiDone);
      return (
        <div>
          {newMealFormFields.map(({name, label, type}) => {
            // console.log('item:', item);
            // console.log('this.state.itemToAdd', this.state.itemToAdd);
            // console.log('this.state.apiDone', this.state.apiDone)
            return (
              <div key={name}>
                <label>{label}</label>
                <input name={name} type={type} onChange={this.handleChange} value={this.state.itemToAdd[name]}/>
              </div>
            )
          })}
        </div>
      )
  };

  handleSubmitClick = (e) => {
    this.props.onSubmit(e, this.state.itemToAdd);
    this.props.closePopup();
  }

  render() {
    return (
      <FormContainer>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {this.state.apiDone ? this.renderFields() : null}
           <button type="submit">submit</button>
        </form>
      </FormContainer>
    )
  }
}

function mapStateToProps({apiItem}) {
  return {apiItem};
}

export default connect(mapStateToProps, actions)(NewMealForm);
