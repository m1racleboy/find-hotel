import React from 'react';

export default function MyButton({ children, ...props }) {
  return (
    <>
      <button className="button" {...props}>{children}</button>
    </>
  );
}
