export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavoritesAction = data => {
  return { type: ADD_TO_FAVORITES, payload: data };
};

export const removeFromFavoritesAction = dataId => {
  return { type: REMOVE_FROM_FAVORITES, payload: dataId };
};
