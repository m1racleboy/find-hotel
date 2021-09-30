import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MySelect({ children, counter, ...props }) {
  const [disabled, setDisabled] = useState(true);
  const currentSortType = useSelector(state => state.currentSortType);
  const favoriteHotels = useSelector(state => state.favoriteHotels);
  const type = children.toLowerCase();
  const upper = '-вверх';
  const lower = '-вниз';

  useEffect(() => {
    favoriteHotels.length < 2 ? setDisabled(true) : setDisabled(false);
  }, [favoriteHotels]);

  return (
    <button
      className={currentSortType === type + upper || currentSortType === type + lower ? 'select select--active' : 'select'}
      data-sort-type={counter % 2 === 0 ? type + lower : type + upper}
      disabled={disabled}
      {...props}
    >
      {children}
      <svg className={currentSortType === type + upper ? "upper--active" : "upper"} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z" fill="#99A0A3" />
      </svg>
      <svg className={currentSortType === type + lower ? "lower--active" : "lower"} width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z" fill="#99A0A3" />
      </svg>
    </button>
  );
}
