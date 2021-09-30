import dayjs from 'dayjs';
import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { setQueryParameters } from '../../store/rootReducer';

export default function SearchHotel() {
  const locationInput = useInput('', { isEmpty: true, minLength: 3, maxLength: 30, isOnlySpace: true });
  const dateInput = useInput(``, { isEmpty: true, isDate: true });
  const daysCountInput = useInput('', { isEmpty: true, minLength: 1, maxLength: 3, isOnlySpace: true });
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setQueryParameters({
      location: locationInput.value,
      date: dateInput.value,
      daysCount: daysCountInput.value,
    }));
  };

  return (
    <section className="search-hotel">
      <form action="" className="search-hotel__form" onSubmit={searchHandler}>
        <MyInput
          onChange={(e) => locationInput.onChange(e)}
          onBlur={(e) => locationInput.onBlur(e)}
          className="input"
          type={'text'}
          name={'location'}
          id={'location'}
          required
        >
          Локация
        </MyInput>
        <MyInput
          onChange={(e) => dateInput.onChange(e)}
          onBlur={(e) => dateInput.onBlur(e)}
          className="search-hotel__date input"
          type={'date'}
          name={'date'}
          id={'date'}
          required
        >
          Дата заселения
        </MyInput>
        <MyInput
          onChange={(e) => daysCountInput.onChange(e)}
          onBlur={(e) => daysCountInput.onBlur(e)}
          className="input"
          type={'text'}
          name={'days-count'}
          id={'days-count'}
          required
        >
          Количество дней
        </MyInput>
        <MyButton className="button" type={'submit'}>Найти</MyButton>
      </form>
    </section>
  );
}
