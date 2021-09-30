import dayjs from 'dayjs';
import { put, takeEvery, call, select } from 'redux-saga/effects';
import { Actions, setHotels } from './rootReducer';

const fetchHotelsFromApi = ({ location, date, daysCount }) => fetch(
  `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${dayjs().add(daysCount, 'day').format('YYYY-MM-DD')}&limit=10`,
  {
    method: 'get',
  });

function* fetchHotelWorker() {
  try {
    const queryParameters = yield select(state => state.queryParameters);
    const response = yield call(fetchHotelsFromApi, queryParameters);
    const data = yield response.json();
    yield put(setHotels(data));
  }
  catch (err) {
    yield put(setHotels([]));
    console.log(err);
  }
}

export function* rootWatcher() {
  yield takeEvery(Actions.FETCH_HOTELS, fetchHotelWorker);
}
