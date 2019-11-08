import React, { Component } from "react";
import * as S from "./CommonContent.jsx.js";

class CommonContent extends Component {
  render() {
    return (
      <S.CellContainer>
        <S.Header>Common</S.Header>
        {this.props.foodList.map(item => {
          return (
            <S.CommonCell
              key={item.food_name}
              onClick={() => this.props.onClick(item.food_name, "common")}
            >
              <img src={item.photo.thumb} alt="Food" />
              <span>{item.food_name}</span>
            </S.CommonCell>
          );
        })}
      </S.CellContainer>
    );
  }
}

export default CommonContent;
