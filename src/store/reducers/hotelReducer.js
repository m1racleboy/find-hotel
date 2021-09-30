import dayjs from "dayjs";
import { HotelActions } from '../actions/hotelActions';

const initialState = {
  hotels: [],
  favoriteHotels: [],
  queryParameters: {
    location: 'Moscow',
    date: dayjs().format('YYYY-MM-DD'),
    daysCount: 1,
  },
  images: [
    'img/img-1.png',
    'img/img-2.png',
    'img/img-3.png',
    'img/img-4.png',
  ],
  currentSortType: null,
}

export default function hotelReducer(state = initialState, action) {
  switch (action.type) {
    case HotelActions.SET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      }
    case HotelActions.SET_QUERY_PARAMETERS:
      return {
        ...state,
        queryParameters: action.payload,
      }
    case HotelActions.POST_FAVORITE:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels, { ...state.hotels.filter(hotel => hotel.hotelId === +action.payload), queryParameters: { ...state.queryParameters } }],
      }
    case HotelActions.DELETE_FAVORITE:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    case HotelActions.CHANGE_SORT_TYPE_VALUE:
      return {
        ...state,
        currentSortType: action.payload,
      }
    case HotelActions.SORT_BY_STARS_UPPER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.sort((a, b) => b[0].stars - a[0].stars)],
      }
    case HotelActions.SORT_BY_STARS_LOWER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.sort((a, b) => a[0].stars - b[0].stars)],
      }
    case HotelActions.SORT_BY_PRICE_UPPER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.sort((a, b) => b[0].priceAvg - a[0].priceAvg)],
      }
    case HotelActions.SORT_BY_PRICE_LOWER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.sort((a, b) => a[0].priceAvg - b[0].priceAvg)],
      }
    default: return state;
  }
};
