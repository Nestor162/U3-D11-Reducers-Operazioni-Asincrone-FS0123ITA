export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_QUERY = "SET_QUERY";
export const GET_JOBS = "GET_JOBS";

export const addToFavoritesAction = data => {
  return { type: ADD_TO_FAVORITES, payload: data };
};

export const removeFromFavoritesAction = dataId => {
  return { type: REMOVE_FROM_FAVORITES, payload: dataId };
};

export const jobsResults = query => {
  return async (dispatch, getState) => {
    console.log("Un thunk è stato usato per dispatchare questa azione", getState());
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log("tutto ok", data);
        dispatch({
          type: GET_JOBS,
          payload: data
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
