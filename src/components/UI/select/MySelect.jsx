import React from 'react';

export default function MySelect({ children, ...props }) {
  return (
    <button className="select" {...props}>
      {children}
      <svg className="upper" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z" fill="#99A0A3" />
      </svg>
      <svg className="lower" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z" fill="#99A0A3" />
      </svg>
    </button>
  );
}
