// SurveyField contains logic to render a single label and text input

import React from "react";
import * as S from "./MealField.jsx.js";

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    // if touched, return error
    <S.MealField>
      <S.Label>{label + ":"}</S.Label>
      <S.Input {...input} type={type} />
      <S.ErrorDiv>{touched && error}</S.ErrorDiv>
    </S.MealField>
  );
};
