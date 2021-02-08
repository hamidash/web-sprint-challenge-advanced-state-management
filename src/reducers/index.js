import {
  FETCH_SMURF_FAIL,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  POST_SMURF_FORM_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: true,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: action.payload,
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Fetch not successfull, try again",
      };
    case POST_SMURF_FORM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Please enter all fields",
      };
    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: action.payload,
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "New smurf post failed, try again",
      };

    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
