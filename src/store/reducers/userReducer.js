import { UserActions } from '../actions/userActions';

const initialState = {
  userData: {
    email: '',
    password: '',
  },
  isAuth: false,
  isLoading: true,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isAuth: true,
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
    case UserActions.CHANGE_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default: return state;
  }
};
