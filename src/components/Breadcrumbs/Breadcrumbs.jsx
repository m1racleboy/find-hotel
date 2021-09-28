import React from 'react';

export default function Breadcrumbs({children}) {
  return (
    <li className="breadcrumbs-item">
      <p className="breadcrumbs-item__title">{children}</p>
    </li>
  );
}
