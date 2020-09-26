import React, { useState } from "react";
import { connect } from "react-redux";
import { createNewSmurf } from "../actions";

function NewSmurf(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
  });

  function changeHandler(e) {
    e.preventDefault();
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.createNewSmurf(formData);
    setFormData({
      name: "",
      age: "",
      height: "",
    });
  }

  return (
    <form action="" className="form" onSubmit={submitHandler}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="enter name here"
        />
      </label>
      <br />
      <label htmlFor="age">
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={changeHandler}
          placeholder="enter age here"
        />
      </label>{" "}
      <br />
      <label htmlFor="height">
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={changeHandler}
          placeholder="enter height here"
        />
      </label>
      <br />
      <br />
      <button className="button">Create a new Smurf</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isPosting: state.isPosting,
    error: state.error,
  };
};

export default connect(mapStateToProps, { createNewSmurf })(NewSmurf);
