import React from 'react';

export default function MyInput({ children, fontWeight, id, ...props }) {
  return (
    <>
      <label className="label" style={{ fontWeight: fontWeight }} htmlFor={id}>{children}</label>
      <input className="input" id={id} {...props} />
    </>
  );
}
