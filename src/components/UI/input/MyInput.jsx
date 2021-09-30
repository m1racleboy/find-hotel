import React from 'react';

export default function MyInput({ children, fontWeight, id, ...props }) {
  return (
    <>
      <label className="label" style={{ fontWeight: fontWeight }} htmlFor={id}>{children}</label>
      <input id={id} {...props} />
    </>
  );
}
