import React from 'react';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import SearchHotel from '../SearchHotel/SearchHotel';

export default function MainScreen() {
  return (
    <>
      <Header />
      <section className="main-screen">
        <div className="main-screen__wrap">
          <SearchHotel />
          <Favorites />
          <section className="catalog-hotels">
            <h1 className="visually-hidden">Catalog Hotels</h1>
            <ul className="catalog-hotels__breadcrumbs-list">
              <li className="catalog-hotels__breadcrumbs-item"></li>
              <li className="catalog-hotels__breadcrumbs-item"></li>
            </ul>
            <p className="catalog-hotels__date"></p>
            <div className="catalog-hotels__slider">
            </div>
            <h2 className="catalog-hotels__favorite-count">Добавлено в Избранное: { }</h2>
            <ul className="catalog-hotels__favorite-list">

            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
