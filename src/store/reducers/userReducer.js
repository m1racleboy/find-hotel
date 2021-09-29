const initialState = {
  userData: {
    email: '',
    password: '',
  },
  isAuth: false,
  isLoading: true,
  favoriteHotels: [],
  images: [
    'img/img-1.png',
    'img/img-2.png',
    'img/img-3.png',
    'img/img-4.png',
  ],
}

export const UserActions = {
  SET_USER_DATA: 'SET_USER_DATA',
  SET_FAVORITE_HOTEL: 'SET_FAVORITE_HOTEL',
  CHECK_AUTH: 'CHECK_AUTH',
  CHECK_LOADING: 'CHECK_LOADING',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  DELETE_USER_DATA: 'DELETE_USER_DATA',
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case UserActions.DELETE_USER_DATA:
      return {
        ...state,
        userData: {
          email: '',
          password: '',
          isAuth: false,
        },
      };
    case UserActions.CHECK_AUTH:
      return {
        ...state,
        isAuth: action.payload
      };
    case UserActions.CHECK_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UserActions.SET_FAVORITE_HOTEL:
      return {

      };

    default: return state;
  }
}
// actionCreator ↓ передаем этот кал в диспач, чтобы удалить фэйворит нужно просто передать айдишник и отфильтровать массив (т.к. фильтр возвращает новый массив) state.favoriteHotels.filter(item => item.id !== action.payload)
export const login = payload => ({ type: UserActions.SET_USER_DATA, payload });
export const logout = () => ({ type: UserActions.DELETE_USER_DATA });
export const checkAuth = payload => ({ type: UserActions.CHECK_AUTH, payload });
export const checkLoading = payload => ({ type: UserActions.CHECK_LOADING, payload });
export const setFavoriteHotel = payload => ({ type: UserActions.SET_FAVORITE_HOTEL, payload });

