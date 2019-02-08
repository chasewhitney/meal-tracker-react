import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';


class AllTab extends Component {
  // Branded dropdown
  // ID: nix_item_id
  // food_name
  // photo.thumb
  // brand_name
  // serving_qty
  // serving_unit
  // nf_calories

  // Common dropdown
  // ID: food_name
  // food_name
  // photo.thumb
  handleClick = (id) => {
    console.log('clicked:', id);
  }

  renderBranded = () => {
    const { branded } = this.props.apiAll.all;
    console.log('branded:', branded);

    return (<div>{branded.map(item => {
      return (<div key={item.nix_item_id} onClick={() => this.handleClick(item.nix_item_id)}>
                <img src={item.photo.thumb} alt="Food" />
                <div>{item.food_name}</div>
            </div>);
    })}</div>);
  }

  renderCommon = () => {
    const { common } = this.props.apiAll.all;

    return (<div>{common.map(item => {
      return (<div key={item.food_name} onClick={() => this.handleClick(item.food_name)}>
                <img src={item.photo.thumb} alt="Food" />
                <div>{item.food_name}</div>
              </div>);
    })}</div>);
  }

  render(){
    return (
          <div>
            <div>
              <h3>Common Foods</h3>
              <div>
                {this.renderCommon()}
              </div>
            </div>
            <div>
              <h3>Branded Foods</h3>
              <div>
                {this.renderBranded()}
              </div>
            </div>
          </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(AllTab);
