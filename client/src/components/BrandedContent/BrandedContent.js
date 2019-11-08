import React from "react";
import * as S from "./BrandedContent.jsx.js";

export default props => {
  return (
    <S.CellContainer>
      <S.Header>Branded</S.Header>
      {props.foodList.map(item => {
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
      })}
    </S.CellContainer>
  );
};
