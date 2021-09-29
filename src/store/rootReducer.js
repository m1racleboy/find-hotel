const initialState = {
  hotels: [],
  favoriteHotels: [],
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
}

export const Actions = {
  SET_USER_DATA: 'SET_USER_DATA',
  DELETE_USER_DATA: 'DELETE_USER_DATA',
  CHECK_AUTH: 'CHECK_AUTH',
  CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
  SET_HOTELS: 'SET_HOTELS',
  FETCH_HOTELS: 'FETCH_HOTELS',
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
    default: return state;
  }
};

// actionCreator ↓ передаем этот кал в диспач, чтобы удалить фэйворит нужно просто передать айдишник и отфильтровать массив (т.к. фильтр возвращает новый массив) state.favoriteHotels.filter(item => item.id !== action.payload)
export const login = payload => ({ type: Actions.SET_USER_DATA, payload });
export const logout = () => ({ type: Actions.DELETE_USER_DATA });
export const checkAuth = payload => ({ type: Actions.CHECK_AUTH, payload });
export const changeLoadingStatus = payload => ({ type: Actions.CHANGE_LOADING_STATUS, payload });

export const setHotels = payload => ({ type: Actions.SET_HOTELS, payload });
export const fetchHotels = () => ({ type: Actions.FETCH_HOTELS });
