import { put, takeEvery, call } from 'redux-saga/effects';
import { Actions, setHotels } from './rootReducer';

const fetchHotelsFromApi = () => fetch(
  'http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-12-20&checkOut=2021-12-21&limit=10',
  {
    method: 'get',
  })

function* fetchHotelWorker() {
  try {
    const response = yield call(fetchHotelsFromApi);
    const data = yield response.json();
    yield put(setHotels(data));
  }
  catch (err) {
    console.log('МОЯ ОШИБКА СУКА Я ЕЕ НАПИСАЛ ОНА ТУТ !!!!!!!! ТУТ БЛЯТЬ', err);
  }
}

export function* rootWatcher() {
  yield takeEvery(Actions.FETCH_HOTELS, fetchHotelWorker);
}
