import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";
export const POST_SMURF_FORM_FAIL = "POST_SMURF_FORM_FAIL";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const addSmurf = (smurfData) => (dispatch) => {
  // if one of 3 required form fields is empty,
  // thunk dispatches FORM FAIL message, and exits the function
  if (!smurfData.name || !smurfData.nickname || !smurfData.position) {
    return dispatch({ type: POST_SMURF_FORM_FAIL });
  }

  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurfData)
    .then((res) => dispatch({ type: POST_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: POST_SMURF_FAIL, payload: err }));
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
