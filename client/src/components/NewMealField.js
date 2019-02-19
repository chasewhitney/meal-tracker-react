

import React from 'react';

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    // if touched, return error
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div style={{ marginBottom: '5px' }}>
        {touched && error}
      </div>
    </div>
  );
};
