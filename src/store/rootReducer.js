import dayjs from "dayjs";

const initialState = {
  hotels: [],
  favoriteHotels: [],
  queryParameters: {
    location: 'Moscow',
    date: dayjs().format('YYYY-MM-DD'),
    daysCount: 1,
  },
  userData: {
    email: '',
    password: '',
  },
  isAuth: false,
  isLoading: true,
  images: [
    'img/img-1.png',
    'img/img-2.png',
    'img/img-3.png',
    'img/img-4.png',
  ],
  currentSortType: null,
}

export const Actions = {
  SET_USER_DATA: 'SET_USER_DATA',
  DELETE_USER_DATA: 'DELETE_USER_DATA',
  CHECK_AUTH: 'CHECK_AUTH',
  CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
  SET_HOTELS: 'SET_HOTELS',
  SET_QUERY_PARAMETERS: 'SET_QUERY_PARAMETERS',
  FETCH_HOTELS: 'FETCH_HOTELS',
  POST_FAVORITE: 'POST_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  SORT_BY_STARS_UPPER: 'SORT_BY_STARS_UPPER',
  SORT_BY_STARS_LOWER: 'SORT_BY_STARS_LOWER',
  SORT_BY_PRICE_UPPER: 'SORT_BY_PRICE_UPPER',
  SORT_BY_PRICE_LOWER: 'SORT_BY_PRICE_LOWER',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isAuth: true,
      };
    case Actions.DELETE_USER_DATA:
      return {
        ...state,
        userData: {
          email: '',
          password: '',
          isAuth: false,
        },
      };
    case Actions.CHECK_AUTH:
      return {
        ...state,
        isAuth: action.payload
      };
    case Actions.CHANGE_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Actions.SET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      }
    case Actions.SET_QUERY_PARAMETERS:
      return {
        ...state,
        queryParameters: action.payload,
      }
    case Actions.POST_FAVORITE:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels, { ...state.hotels.filter(hotel => hotel.hotelId === +action.payload), queryParameters: { ...state.queryParameters } }],
      }
    case Actions.DELETE_FAVORITE:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    case Actions.SORT_BY_STARS_UPPER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    case Actions.SORT_BY_STARS_LOWER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    case Actions.SORT_BY_PRICE_UPPER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    case Actions.SORT_BY_PRICE_LOWER:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel[0].hotelId !== +action.payload)],
      }
    default: return state;
  }
};

export const login = payload => ({ type: Actions.SET_USER_DATA, payload });
export const logout = () => ({ type: Actions.DELETE_USER_DATA });
export const checkAuth = payload => ({ type: Actions.CHECK_AUTH, payload });
export const changeLoadingStatus = payload => ({ type: Actions.CHANGE_LOADING_STATUS, payload });
export const setHotels = payload => ({ type: Actions.SET_HOTELS, payload });
export const setQueryParameters = payload => ({ type: Actions.SET_QUERY_PARAMETERS, payload });
export const fetchHotels = () => ({ type: Actions.FETCH_HOTELS });
export const postFavorite = payload => ({ type: Actions.POST_FAVORITE, payload });
export const deleteFavorite = payload => ({ type: Actions.DELETE_FAVORITE, payload });
export const sortByStarsUpper = payload => ({ type: Actions.SORT_BY_STARS_UPPER, payload });
export const sortByStarsLower = payload => ({ type: Actions.SORT_BY_STARS_LOWER, payload });
export const sortByPriceUpper = payload => ({ type: Actions.SORT_BY_PRICE_UPPER, payload });
export const sortByPriceLower = payload => ({ type: Actions.SORT_BY_PRICE_LOWER, payload });

