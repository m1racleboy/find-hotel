import dayjs from "dayjs";

const initialState = {
  location: 'Saint-Petersburg',
  date: dayjs().format('YYYY-MM-DD'),
  daysCount: 1,
  hotels: [],
  sortType: null,
}

export const HotelActions = {
  GET_HOTELS: 'GET_HOTELS',
}

export default function hotelReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};
