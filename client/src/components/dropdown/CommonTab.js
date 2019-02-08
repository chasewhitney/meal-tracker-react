import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';


class CommonTab extends Component {


  render(){
    return (
          <div>Common Tab</div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(CommonTab);
