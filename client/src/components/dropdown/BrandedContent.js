import React from 'react';
import styled from 'styled-components';

const BrandedCell = styled.div`
  background-color: #ffffff;
  color: black;
  padding: 1rem;
  font-size: 1.5rem;

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  justify-items: start;

  &:hover {
    background-color: #eeeeee;
  }

  & img {
    height: 40px;
    margin-right: 2rem;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
  & .name {
     grid-row: 1 / 2;
     grid-column: 2 /3;
  }
  & .brand {
    grid-row: 2 / 3;
    grid-column: 2 /3;
  }
  & .cal {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }
`;

const CellContainer = styled.div`
  pointer-events: auto;
`;

const Header = styled.h2`
  background-color: #ffffff;
  color: black;
`;

export default (props) => {
  return (
    <CellContainer>
      <Header>Branded</Header>
      {props.foodList.map(item => {
        return (
          <BrandedCell key={item.nix_item_id} onClick={() => {props.onClick(item.nix_item_id, "branded")}}>
            <img src={item.photo.thumb} alt="Food" />
            <span className="name">{item.food_name}</span>
            <span className="brand">{item.brand_name}, {item.serving_qty.toPrecision(2)}{item.serving_unit}</span>
            <span className="cal">{Math.round(item.nf_calories)} cal</span>
          </BrandedCell>
        );
      })
    }
  </CellContainer>);
}
