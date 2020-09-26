import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";
import Smurf from './Smurf'

function SmurfsList(props) {
  useEffect(() => {
    props.getSmurfData();
  }, []);

  return (
    <div className="smurfs">
      <h1>Current Smurf List</h1>
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );

  
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfData})(SmurfsList);
