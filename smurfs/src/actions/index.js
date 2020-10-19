import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILED = "POST_FAILED";

export const getSmurfData = () => dispatch => {
    dispatch({type:FETCH_START})

    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: FETCH_FAILED, payload: err.response});
        });
}
export const createNewSmurf = (smurf) => dispatch => {
    dispatch({type: POST_START})

    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res =>{
            console.log(res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: POST_FAILED, payload: err.response });
        });
};

