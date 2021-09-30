export const HotelActions = {
  SET_HOTELS: 'SET_HOTELS',
  SET_QUERY_PARAMETERS: 'SET_QUERY_PARAMETERS',
  FETCH_HOTELS: 'FETCH_HOTELS',
  POST_FAVORITE: 'POST_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  CHANGE_SORT_TYPE_VALUE: 'CHANGE_SORT_TYPE_VALUE',
  SORT_BY_STARS_UPPER: 'SORT_BY_STARS_UPPER',
  SORT_BY_STARS_LOWER: 'SORT_BY_STARS_LOWER',
  SORT_BY_PRICE_UPPER: 'SORT_BY_PRICE_UPPER',
  SORT_BY_PRICE_LOWER: 'SORT_BY_PRICE_LOWER',
};

export const setHotels = payload => ({ type: HotelActions.SET_HOTELS, payload });
export const setQueryParameters = payload => ({ type: HotelActions.SET_QUERY_PARAMETERS, payload });
export const fetchHotels = () => ({ type: HotelActions.FETCH_HOTELS });
export const postFavorite = payload => ({ type: HotelActions.POST_FAVORITE, payload });
export const deleteFavorite = payload => ({ type: HotelActions.DELETE_FAVORITE, payload });
export const changeSortTypeValue = payload => ({ type: HotelActions.CHANGE_SORT_TYPE_VALUE, payload })
export const sortByStarsUpper = () => ({ type: HotelActions.SORT_BY_STARS_UPPER });
export const sortByStarsLower = () => ({ type: HotelActions.SORT_BY_STARS_LOWER });
export const sortByPriceUpper = () => ({ type: HotelActions.SORT_BY_PRICE_UPPER });
export const sortByPriceLower = () => ({ type: HotelActions.SORT_BY_PRICE_LOWER });
