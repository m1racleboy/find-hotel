import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import HotelCard from '../HotelCard/HotelCard';
import SearchHotel from '../SearchHotel/SearchHotel';

export default function MainScreen() {
  const favoriteHotels = 3;
  return (
    <>
      <Header />
      <section className="main-screen">
        <div className="main-screen__wrap">
          <SearchHotel />
          <Favorites />
          <section className="catalog-hotels">
            <h1 className="visually-hidden">Catalog Hotels</h1>
            <div className="catalog-hotels__wrap">
              <ul className="catalog-hotels__breadcrumbs-list">
                <Breadcrumbs>Отели</Breadcrumbs>
                <Breadcrumbs>Москва</Breadcrumbs>
              </ul>
              <p className="catalog-hotels__date">07 июля 2020</p>
            </div>
            <div className="catalog-hotels__slider">
              <ul className="catalog-hotels__slide-list">
                <li className="catalog-hotels__slide-item"><img className="catalog-hotels__slide-img" src="img/img-2.png" width="164" height="149" alt="img2" /></li>
                <li className="catalog-hotels__slide-item"><img className="catalog-hotels__slide-img" src="img/img-3.png" width="164" height="149" alt="igm3" /></li>
                <li className="catalog-hotels__slide-item"><img className="catalog-hotels__slide-img" src="img/img-1.png" width="164" height="149" alt="img1" /></li>
                <li className="catalog-hotels__slide-item"><img className="catalog-hotels__slide-img" src="img/img-4.png" width="164" height="149" alt="img4" /></li>
              </ul>
            </div>
            <h3 className="catalog-hotels__favorite-count">Добавлено в Избранное: <span className="catalog-hotels__favorite-count--value">{favoriteHotels}</span> {favoriteHotels === 1 ? 'отель' : favoriteHotels < 5 ? 'отеля' : 'отелей'}</h3>
            <ul className="catalog-hotels__list">
              <HotelCard withHome={true} />
              <HotelCard withHome={true} />
              <HotelCard withHome={true} />
              <HotelCard withHome={true} />
              <HotelCard withHome={true} />
              <HotelCard withHome={true} />
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
