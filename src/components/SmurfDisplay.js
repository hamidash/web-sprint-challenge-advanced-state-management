import React from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <Alert color = "primary"> Fetching Smurf Data</Alert>}
        {!this.props.smurfs && <Alert color = "danger"> Not able to fetch data</Alert>}
        <div className="smurfs">
          {this.props.smurfs.map((smurf) => (
            <Smurf smurf={smurf} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
