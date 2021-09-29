import { put, takeEvery } from 'redux-saga/effects';
import { checkAuth, checkLoading, login, logout, UserActions } from '../reducers/userReducer';

function* loginWorker() {
  yield put(login());
}

function* logoutWorker() {
  yield put(logout());
}

function* authWorker() {
  yield put(checkAuth());
}

function* loadingWorker() {
  yield put(checkLoading());
}

export function* userWatcher() {
  yield takeEvery(UserActions.SET_USER_DATA, loginWorker);
  yield takeEvery(UserActions.DELETE_USER_DATA, logoutWorker);
  yield takeEvery(UserActions.CHECK_AUTH, authWorker);
  yield takeEvery(UserActions.CHECK_LOADING, loadingWorker);
}
