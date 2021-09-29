import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth, logout } from '../../store/reducers/userReducer';

export default function Header() {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(checkAuth(false));
    localStorage.removeItem('auth');
  }

  return (
    <header className="header">
      <Link to='/main' className="header__main-link">Simple Hotel Check</Link>
      <button className="header__logout" onClick={logoutHandler}>Выйти</button>
    </header>
  );
}
