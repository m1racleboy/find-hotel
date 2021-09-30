import dayjs from 'dayjs';
import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import MyError from '../UI/error/MyError';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { setQueryParameters } from '../../store/actions/hotelActions';

const LOCATION_MIN_LENGTH = 3;
const LOCATION_MAX_LENGTH = 50;
const DAYS_COUNT_MIN_LENGTH = 1;
const DAYS_CONT_MAX_LENGTH = 30;

export default function SearchHotel() {
  const locationInput = useInput('', { isEmpty: true, minLength: LOCATION_MIN_LENGTH, maxLength: LOCATION_MAX_LENGTH, isOnlySpace: true });
  const dateInput = useInput(`${dayjs().format('YYYY-MM-DD')}`, { isEmpty: true, isDate: true });
  const daysCountInput = useInput('', { isEmpty: true, minLength: DAYS_COUNT_MIN_LENGTH, maxLength: DAYS_CONT_MAX_LENGTH, isOnlySpace: true, isOnlyNumbers: true });
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
        >
          Локация
        </MyInput>
        {(locationInput.isDirty && locationInput.isEmpty) && <MyError>Поле локации не может быть пустым</MyError>}
        {(locationInput.isDirty && locationInput.minLengthError) && <MyError>Слишком короткий запрос, осталось: {LOCATION_MIN_LENGTH - locationInput.value.length}</MyError>}
        {(locationInput.isDirty && locationInput.maxLengthError) && <MyError>Слишком длинный запрос, превышен на: {locationInput.value.length - LOCATION_MAX_LENGTH}</MyError>}
        {(locationInput.isDirty && locationInput.spaceError) && <MyError>Поле локации не может содержать пробелы</MyError>}
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
        {(dateInput.isDirty && dateInput.isEmpty) && <MyError>Поле даты заселения не может быть пустым</MyError>}
        {(dateInput.isDirty && dateInput.isDate) && <MyError>Некорректная дата</MyError>}
        <MyInput
          onChange={(e) => daysCountInput.onChange(e)}
          onBlur={(e) => daysCountInput.onBlur(e)}
          className="input"
          type={'text'}
          name={'days-count'}
          id={'days-count'}
        >
          Количество дней
        </MyInput>
        {(daysCountInput.isDirty && daysCountInput.isEmpty) && <MyError>Поле количество дней не может быть пустым</MyError>}
        {(daysCountInput.isDirty && daysCountInput.minLengthError) && <MyError>Слишком короткий запрос, осталось: {DAYS_COUNT_MIN_LENGTH - daysCountInput.value.length}</MyError>}
        {(daysCountInput.isDirty && daysCountInput.maxLengthError) && <MyError>Слишком длинный запрос, превышен на: {daysCountInput.value.length - DAYS_CONT_MAX_LENGTH}</MyError>}
        {(daysCountInput.isDirty && daysCountInput.numbersError) && <MyError>Поле количество дней должно содержать только числа и не превышать 3 знаков</MyError>}
        {(daysCountInput.isDirty && daysCountInput.spaceError) && <MyError>Поле количество дней не может содержать пробелы</MyError>}
        <MyButton
          className="button"
          type={'submit'}
          disabled={!locationInput.inputValid || !dateInput.inputValid || !daysCountInput.inputValid}
        >
          Найти
        </MyButton>
      </form>
    </section>
  );
}
