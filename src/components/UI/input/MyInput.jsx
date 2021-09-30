import React from 'react';

export default function MyInput({ children, fontWeight, id, ...props }) {
  return (
    <div className="input__wrap">
      <input id={id} {...props} />
      <label className="label" style={{ fontWeight: fontWeight }} htmlFor={id}>{children}</label>
    </div>
  );
}
