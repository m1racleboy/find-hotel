import { all } from 'redux-saga/effects';
import { hotelWatcher } from './hotelAsyncActions';
import { userWatcher } from './userAsyncActions';

export function* rootWatcher() {
  yield all([userWatcher(), hotelWatcher()]);
}
