import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import { Alert, Button, Form } from "reactstrap";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
      nickname: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      position: "",
      nickname: "",
      description: "",
    });
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        {!this.props.isFetching && (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="name">Name:</label><br/> */}
              <input
                onChange={this.handleChange}
                name="name"
                id="name"
                placeholder="Enter Name"
                value={this.state.name}
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="position"
                id="position"
                placeholder="Enter Poisition"
                value={this.state.position}
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Enter Nickname"
                value={this.state.nickname}
              />
              <textarea
                onChange={this.handleChange}
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter Description"
                value={this.state.description}
              />
            </div>
            <Button color="primary" size="lg">
              Submit Smurf
            </Button>
          </form>
        )}

        {this.props.formIsFetching && (
          <Alert color="primary"> Sending Form</Alert>
        )}

        {this.props.formError && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {this.props.formError}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formIsFetching: state.isFetching,
    formError: state.error,
  };
};

export default connect(mapStateToProps, { addSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
