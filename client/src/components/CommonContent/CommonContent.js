import React from "react";
import * as S from "./CommonContent.jsx.js";

const renderList = props => {
  if (props.foodList.length !== 0) {
    return props.foodList.map(item => {
      return (
        <S.CellContainer key={item.food_name}>
          <S.CommonCell onClick={() => props.onClick(item.food_name, "common")}>
            <img src={item.photo.thumb} alt="Food" />
            <span>{item.food_name}</span>
          </S.CommonCell>
        </S.CellContainer>
      );
    });
  } else {
    return <S.CommonCell>No Content</S.CommonCell>;
  }
};

export default props => {
  return (
    <S.ContentContainer>
      <S.Header>Common Content</S.Header>
      {renderList(props)}
    </S.ContentContainer>
  );
};
