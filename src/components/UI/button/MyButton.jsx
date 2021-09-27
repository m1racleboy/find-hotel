import React from 'react';

export default function MyButton(props) {
  const {
    type,
    children,
  } = props;

  return (
    <>
      <button className="button" type={type}>{children}</button>
    </>
  );
}
