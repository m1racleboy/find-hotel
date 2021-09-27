import React from 'react';

export default function MyInput(props) {
  const {
    fontWeight,
    children,
    type,
    name,
  } = props;
  return (
    <>
      <label className="label" style={{ fontWeight: fontWeight }} htmlFor={name}>{children}</label>
      <input className="input" type={type} name={name} id={name}/>
    </>
  );
}
