import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Favorites from '../../components/Favorites/Favorites';
import Header from '../../components/Header/Header';
import HotelCard from '../../components/HotelCard/HotelCard';
import SearchHotel from '../../components/SearchHotel/SearchHotel';
import Loader from '../../components/UI/Loader/Loader';
import { changeLoadingStatus, fetchHotels } from '../../store/rootReducer';

export default function MainScreen() {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images);
  const isLoading = useSelector(state => state.isLoading);
  const favoriteHotels = 3;

  useEffect(() => {
    dispatch(changeLoadingStatus(true));
    dispatch(fetchHotels());
    dispatch(changeLoadingStatus(false));
  }, []);

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
                {images.map(img => <li className="catalog-hotels__slide-item">
                  <img className="catalog-hotels__slide-img" src={img} width="164" height="149" alt={img.replace(/(img\/)/g, '')} />
                </li>)}
              </ul>
            </div>
            <h3 className="catalog-hotels__favorite-count">Добавлено в Избранное: <span className="catalog-hotels__favorite-count--value">{favoriteHotels}</span> {favoriteHotels === 1 ? 'отель' : favoriteHotels < 5 ? 'отеля' : 'отелей'}</h3>
            {isLoading
              ? <Loader />
              : <ul className="catalog-hotels__list">
                <HotelCard withHome={true} />
                <HotelCard withHome={true} />
                <HotelCard withHome={true} />
                <HotelCard withHome={true} />
                <HotelCard withHome={true} />
                <HotelCard withHome={true} />
              </ul>
            }

          </section>
        </div>
      </section>
    </>
  );
}
