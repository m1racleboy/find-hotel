import React, { useState, useEffect } from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MySelect from '../UI/select/MySelect';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortTypeValue, sortByPriceLower, sortByPriceUpper, sortByStarsLower, sortByStarsUpper } from '../../store/rootReducer';

export default function Favorites() {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const favoriteHotels = useSelector(state => state.favoriteHotels);
  const currentSortType = useSelector(state => state.currentSortType);
  const SortTypes = {
    rating: 'Рейтинг',
    price: 'Цена',
  }
  useEffect(() => {
    if (favoriteHotels.length > 1) {
      switch (currentSortType) {
        case SortTypes.rating.toLowerCase() + '-вверх':
          dispatch(sortByStarsUpper());
          break;
        case SortTypes.rating.toLowerCase() + '-вниз':
          dispatch(sortByStarsLower());
          break;
        case SortTypes.price.toLowerCase() + '-вверх':
          dispatch(sortByPriceUpper());
          break;
        case SortTypes.price.toLowerCase() + '-вниз':
          dispatch(sortByPriceLower());
          break;
        default: return;
      }
    }
  }, [currentSortType]);

  const changeSortTypeHandler = (e) => {
    e.preventDefault();
    dispatch(changeSortTypeValue(e.target.dataset.sortType));
    setCounter(counter + 1);
  }

  return (
    <div className="favorites">
      <h1 className="favorites__title">Избранное</h1>
      <MySelect onClick={changeSortTypeHandler} counter={counter}>{SortTypes.rating}</MySelect>
      <MySelect onClick={changeSortTypeHandler} counter={counter}>{SortTypes.price}</MySelect>
      <ul className="favorites__list">
        {favoriteHotels && favoriteHotels.length > 0 ? favoriteHotels.map(hotel => <HotelCard key={hotel[0].hotelId} hotel={hotel[0]} dateInfo={hotel.queryParameters} />)
          : <h2 className="catalog-hotels__favorite-count">Нет избранных отелей</h2>}
      </ul>
    </div >
  );
}
