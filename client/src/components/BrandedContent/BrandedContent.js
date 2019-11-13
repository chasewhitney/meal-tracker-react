import React from "react";
import * as S from "./BrandedContent.jsx.js";

const renderList = props => {
  if (props.foodList.length != 0) {
    return props.foodList.map(item => {
      return (
        <S.BrandedCell
          key={item.nix_item_id}
          onClick={() => {
            props.onClick(item.nix_item_id, "branded");
          }}
        >
          <img src={item.photo.thumb} alt="Food" />
          <span className="name">{item.food_name}</span>
          <span className="brand">
            {item.brand_name}, {item.serving_qty.toPrecision(2)}
            {item.serving_unit}
          </span>
          <span className="cal">{Math.round(item.nf_calories)} cal</span>
        </S.BrandedCell>
      );
    });
  } else {
    return <div>No Content</div>;
  }
};

export default props => {
  return (
    <S.CellContainer>
      <S.Header>Branded</S.Header>
      {renderList(props)}
    </S.CellContainer>
  );
};
