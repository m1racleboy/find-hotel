import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Favorites from '../../components/Favorites/Favorites';
import Header from '../../components/Header/Header';
import HotelCard from '../../components/HotelCard/HotelCard';
import SearchHotel from '../../components/SearchHotel/SearchHotel';
import Loader from '../../components/UI/Loader/Loader';
import Slider from '../../components/Slider/Slider';
import { fetchHotels } from '../../store/actions/hotelActions';

export default React.memo(function MainScreen() {
  const dispatch = useDispatch();
  const images = useSelector(state => state.hotel.images);
  const hotels = useSelector(state => state.hotel.hotels);
  const queryParameters = useSelector(state => state.hotel.queryParameters);
  const favoriteHotels = useSelector(state => state.hotel.favoriteHotels);
  const isLoading = useSelector(state => state.user.isLoading);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [queryParameters]);

  if (isLoading) {
    <Loader />
  }

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
                <Breadcrumbs>{queryParameters.location}</Breadcrumbs>
              </ul>
              <p className="catalog-hotels__date">{dayjs(queryParameters.date).format('YYYY MMMM DD')}</p>
            </div>
            <Slider images={images} />
            <h3 className="catalog-hotels__favorite-count">
              Добавлено в Избранное:
              <span className="catalog-hotels__favorite-count--value"> {favoriteHotels.length} </span>
              {favoriteHotels.length % 10 === 1 ? 'отель' : (favoriteHotels.length % 10 < 5 && favoriteHotels.length % 10 !== 0) ? 'отеля' : 'отелей'}
            </h3>
            <ul className="catalog-hotels__list">
              {hotels && hotels.length > 0 ? hotels.map(hotel => <HotelCard withHome={true} key={hotel.hotelId} hotel={hotel} dateInfo={queryParameters} />)
                : <h2 className="catalog-hotels__favorite-count">По вашему запросу ничего не найдено</h2>}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
});
