import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MySelect from '../UI/select/MySelect';

export default function Favorites() {
  return (
    <div className="favorites">
      <h1 className="favorites__title">Избранное</h1>
      <MySelect>Рейтинг</MySelect>
      <MySelect>Цена</MySelect>
      <ul className="favorites__list">
        <HotelCard />
      </ul>
    </div>
  );
}