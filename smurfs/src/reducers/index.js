import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  POST_START,
  POST_SUCCESS,
  POST_FAILED,
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_START:
      return {
        ...state,
        isPosting: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload,
      };
    case POST_FAILED:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
