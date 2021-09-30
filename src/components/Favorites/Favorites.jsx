import React, { useEffect } from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MySelect from '../UI/select/MySelect';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favoriteHotels = useSelector(state => state.favoriteHotels);
  const currentSortType = useSelector(state => state.currentSortType);

  useEffect(() => {

  }, [currentSortType]);

  const changeSortTypeHandler = () => {

  }
  return (
    <div className="favorites">
      <h1 className="favorites__title">Избранное</h1>
      <MySelect>Рейтинг</MySelect>
      <MySelect>Цена</MySelect>
      <ul className="favorites__list">
        {favoriteHotels && favoriteHotels.length > 0 ? favoriteHotels.map(hotel => <HotelCard key={hotel[0].hotelId} hotel={hotel[0]} dateInfo={hotel.queryParameters} />)
          : <h2 className="catalog-hotels__favorite-count">Нет избранных отелей</h2>}
      </ul>
    </div>
  );
}
