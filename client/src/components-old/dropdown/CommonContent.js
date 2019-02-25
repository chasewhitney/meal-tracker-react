import React, { Component } from 'react';
import styled from 'styled-components';

const CommonCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  background-color: #ffffff;
  color: black;
  padding: 1rem;


  & img {
    height: 40px;
    margin-right: 2rem;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;

const CellContainer = styled.div`
`;

const Header = styled.h2`
  background-color: #ffffff;
  color: black;
`;

class CommonContent extends Component {

  render() {
    return (
      <CellContainer>
        <Header>Common</Header>
        {this.props.foodList.map(item => {
          return (
            <CommonCell key={item.food_name} onClick={() => this.props.onClick(item.food_name, "common")}>
              <img src={item.photo.thumb} alt="Food" />
              <span>{item.food_name}</span>
            </CommonCell>
          );
        })}
      </CellContainer>
    );
  }
}

export default CommonContent;
