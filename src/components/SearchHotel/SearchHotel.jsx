import dayjs from 'dayjs';
import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

export default function SearchHotel() {
  return (
    <section className="search-hotel">
      <form action="" className="search-hotel__form">
        <MyInput className="input" type={'text'} name={'location'} id={'location'} required>Локация</MyInput>
        <MyInput className="search-hotel__date input" type={'date'} name={'date'} value={dayjs().format('YYYY-MM-DD')} id={'date'} required>Дата заселения</MyInput>
        <MyInput className="input" type={'text'} name={'days-count'} id={'days-count'} required>Количество дней</MyInput>
        <MyButton className="button" type={'submit'}>Найти</MyButton>
      </form>
    </section>
  );
}
