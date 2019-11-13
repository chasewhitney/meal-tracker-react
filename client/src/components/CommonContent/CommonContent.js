import React, { Component } from "react";
import * as S from "./CommonContent.jsx.js";

const renderList = props => {
  if (props.foodList.length != 0) {
    return props.foodList.map(item => {
      return (
        <S.CommonCell
          key={item.food_name}
          onClick={() => this.props.onClick(item.food_name, "common")}
        >
          <img src={item.photo.thumb} alt="Food" />
          <span>{item.food_name}</span>
        </S.CommonCell>
      );
    });
  } else {
    return <S.CommonCell>No Content</S.CommonCell>;
  }
};

export default props => {
  return (
    <S.CellContainer>
      <S.Header>Common</S.Header>
      {renderList(props)}
    </S.CellContainer>
  );
};
