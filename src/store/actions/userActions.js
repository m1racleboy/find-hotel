export const UserActions = {
  SET_USER_DATA: 'SET_USER_DATA',
  DELETE_USER_DATA: 'DELETE_USER_DATA',
  CHECK_AUTH: 'CHECK_AUTH',
  CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
};

export const login = payload => ({ type: UserActions.SET_USER_DATA, payload });
export const logout = () => ({ type: UserActions.DELETE_USER_DATA });
export const checkAuth = payload => ({ type: UserActions.CHECK_AUTH, payload });
export const changeLoadingStatus = payload => ({ type: UserActions.CHANGE_LOADING_STATUS, payload });
