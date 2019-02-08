import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';


class BrandedTab extends Component {


  render(){
    return (
          <div>Branded Tab</div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(BrandedTab);
