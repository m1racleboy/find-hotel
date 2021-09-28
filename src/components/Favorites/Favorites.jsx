import React from 'react';
import Header from '../Header/Header';
import MySelect from '../UI/select/MySelect';

export default function Favorites() {
  return (
    <div className="favorites">
      <h1 className="favorites__title">Избранное</h1>
      <MySelect />
      <MySelect />
      <ul className="favorites__list">

      </ul>
    </div>
  );
}
