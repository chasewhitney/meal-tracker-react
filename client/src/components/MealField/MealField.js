// SurveyField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    // if touched, return error
    <div>
      <label>{label}</label>
      <input {...input} type={type}/>
      <div>
        {touched && error}
      </div>
    </div>
  );
};
