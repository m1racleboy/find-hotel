import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MySelect({ counter, sortType, ...props }) {
  const [disabled, setDisabled] = useState(true);
  const currentSortType = useSelector(state => state.hotel.currentSortType);
  const favoriteHotels = useSelector(state => state.hotel.favoriteHotels);

  useEffect(() => {
    favoriteHotels.length < 2 ? setDisabled(true) : setDisabled(false);
  }, [favoriteHotels]);

  return (
    <button
      className={currentSortType === sortType.upper
        ? 'select select--active select--upper-active'
        : currentSortType === sortType.lower
          ? 'select select--active select--lower-active'
          : 'select'}
      data-sort-type={counter % 2 === 0 ? sortType.lower : sortType.upper}
      disabled={disabled}
      {...props}
    >
      {sortType.name}
    </button>
  );
}
