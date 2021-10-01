import React, { useState, useEffect } from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MySelect from '../UI/select/MySelect';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortTypeValue, sortByPriceLower, sortByPriceUpper, sortByStarsLower, sortByStarsUpper } from '../../store/actions/hotelActions';

export default function Favorites() {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const favoriteHotels = useSelector(state => state.hotel.favoriteHotels);
  const currentSortType = useSelector(state => state.hotel.currentSortType);

  const SortTypes = {
    RATING: {
      name: 'Рейтинг',
      upper: 'rating-upper',
      lower: 'rating-lower',
    },
    PRICE: {
      name: 'Цена',
      upper: 'price-upper',
      lower: 'price-lower',
    }
  }

  useEffect(() => {
    if (favoriteHotels.length > 1) {
      switch (currentSortType) {
        case SortTypes.RATING.upper:
          dispatch(sortByStarsUpper());
          break;
        case SortTypes.RATING.lower:
          dispatch(sortByStarsLower());
          break;
        case SortTypes.PRICE.upper:
          dispatch(sortByPriceUpper());
          break;
        case SortTypes.PRICE.lower:
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
      <MySelect onClick={changeSortTypeHandler} counter={counter} sortType={SortTypes.RATING}></MySelect>
      <MySelect onClick={changeSortTypeHandler} counter={counter} sortType={SortTypes.PRICE}></MySelect>
      <ul className="favorites__list">
        {favoriteHotels && favoriteHotels.length > 0 ? favoriteHotels.map(hotel => <HotelCard key={hotel[0].hotelId} hotel={hotel[0]} dateInfo={hotel.queryParameters} />)
          : <h2 className="catalog-hotels__favorite-count">Нет избранных отелей</h2>}
      </ul>
    </div >
  );
}
