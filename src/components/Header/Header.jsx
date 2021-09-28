import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <a className="header__main-link">Simple Hotel Check</a>
      <button className="header__logout">Выйти</button>
    </header>
  );
}
