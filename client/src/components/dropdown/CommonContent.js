import React from 'react';
import styled from 'styled-components';

const CommonCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  background-color: #ffffff;
  color: black;
  padding: 1rem;
  border-bottom: 1px solid black;

  & img {
    height: 40px;
    margin-right: 2rem;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;

export default (props) => {
  return (
    <div>
      <h2>Common</h2>
      {props.foodList.map(item => {
        return (
          <CommonCell key={item.food_name}>
            <img src={item.photo.thumb} alt="Food" />
            <span>{item.food_name}</span>
          </CommonCell>
        );
      })}
    </div>
  );
}
