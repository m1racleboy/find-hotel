import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFavorite, postFavorite } from '../../store/actions/hotelActions';

export default React.memo(function HotelCard(props) {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector(state => state.hotel.favoriteHotels);
  const {
    hotel: {
      hotelId,
      hotelName,
      stars,
      priceAvg,
    },
    dateInfo: {
      date,
      daysCount
    }
  } = props;

  const starsCount = Array.from({ length: 5 }, (_, i) => i + 1);

  const postFavoriteHandler = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (favoriteHotels.find(hotel => hotel[0].hotelId === +id)) {
      dispatch(deleteFavorite(id));
      return;
    }
    dispatch(postFavorite(id));
  }

  return (
    <li className="hotel-card">
      {props.withHome
        ?
        <div className="hotel-card__main-wrap">
          <div className="hotel-card__home"></div>
          <div className="hotel-card__content">
            <div className="hotel-card__top-wrap">
              <h2 className="hotel-card__title">{hotelName}</h2>
              <button
                className={favoriteHotels.find(item => item[0].hotelId === hotelId)
                  ? 'hotel-card__favorite-button--active'
                  : "hotel-card__favorite-button"}
                onClick={postFavoriteHandler}
                data-id={hotelId}
              >
              </button>
            </div>
            <p className="hotel-card__date-info">
              {dayjs(date).format('YYYY MMMM, DD')} - {daysCount} {daysCount % 10 === 1 ? 'день' : (daysCount % 10 < 5 && daysCount % 10 !== 0) ? 'дня' : 'дней'}
            </p>
            <div className="hotel-card__bottom-wrap">
              <ul className="hotel-card__star-list">
                {starsCount.map((_, i) => <li className={i < stars ? "hotel-card__star-item--active" : "hotel-card__star-item"} key={i}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z" fill="#C4C3B5" />
                  </svg>
                </li>)}
              </ul>
              <p className="hotel-card__price">Price: <span className="hotel-card__price-value">{priceAvg} ₽</span></p>
            </div>
          </div>
        </div>
        :
        <>
          <div className="hotel-card__top-wrap">
            <h2 className="hotel-card__title">{hotelName}</h2>
            <button
              className={favoriteHotels.find(item => item[0].hotelId === hotelId)
                ? 'hotel-card__favorite-button--active'
                : "hotel-card__favorite-button"}
              onClick={postFavoriteHandler}
              data-id={hotelId}
            >
            </button>
          </div>
          <p className="hotel-card__date-info">
            {dayjs(date).format('YYYY MMMM, DD')} - {daysCount} {((daysCount % 10) === 1) ? 'день' : ((daysCount % 10) < 5) ? 'дня' : 'дней'}
          </p>
          <div className="hotel-card__bottom-wrap">
            <ul className="hotel-card__star-list">
              {starsCount.map((_, i) => <li className={i < stars ? "hotel-card__star-item--active" : "hotel-card__star-item"} key={i}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z" fill="#C4C3B5" />
                </svg>
              </li>)}
            </ul>
            <p className="hotel-card__price">Price: <span className="hotel-card__price-value">{priceAvg} ₽</span></p>
          </div>
        </>}
    </li>
  );
})
