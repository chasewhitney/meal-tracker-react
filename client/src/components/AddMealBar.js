import React, { Component } from 'react';
import styled from 'styled-components';

const Inputs = styled.div`
  background-color: red;
  padding: 1.5rem;

  display: flex;
  justify-content: space-around;
`;

const ApiSearch = styled.input`
  width: 100%;
  height: 3rem;
`;

const ApiBox = styled.div`
  position: relative;
  width: 40rem;
  outline: none;

  display: flex;
  flex-direction: column;
`;

const AddMealButton = styled.button`
`;

class AddMealBar extends Component {

  // fetchApiAll = _.debounce((term) => { this.props.fetchApiAll(term) }, 300 );


  // handleDropdownClick = (id, type) => {
  //   this.setState({toFetch: {id, type}, popup: true});
  // }
  //
  // handleCreateMealClick= () => {
  //   this.setState({toFetch: {id: '', type:''}, popup: true});
  // }


  // handleInputChange = ({ target }) => {
  //   const term = target.value;
  //   this.setState({ term : term });
  //
  //   if(term.length >= 3) {
  //     // console.log(term);
  //     this.fetchApiAll(term);
  //   }
  // }
  //
  // renderDropdown = () => {
  //   if(this.state.term.length >= 3 && this.props.apiAll) {
  //     // console.log('rendering dropdown');
  //     return <Dropdown handleClick={this.handleDropdownClick}/>
  //   }
  // }

  // clearSearch = () => {
  //   this.setState({term: ''});
  // }
  //
  // toggleFocus = () => {
  //   this.setState({ focus: !this.state.focus});
  //
  //     // setTimeout(function(){
  //     //   if(!this.state.focus){
  //     //     console.log('clearing search!');
  //     //     this.clearSearch();
  //     //   }
  //     // }.bind(this), 100);
  // }


  render() {
    return (
      <div>AddMealBar</div>
    )
  }
}



export default AddMealBar;

// <AddMealButton onClick={this.handleCreateMealClick}>Add a meal</AddMealButton>
// <ApiBox onFocus={this.toggleFocus} onBlur={this.toggleFocus} tabIndex="0">
//   <ApiSearch placeholder="Search for info"
//     value={this.state.term}
//     onChange={this.handleInputChange}
//     autoComplete="off"
//     />
//   {this.renderDropdown()}
// </ApiBox>
