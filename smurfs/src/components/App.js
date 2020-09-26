import React, { Component } from "react";
import "./App.css";
import NewSmurf from './NewSmurfForm';
import SmurfsList from './SmurfsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to SMURF Town</h1>
        <NewSmurf/>
        <SmurfsList/>
      </div>
    );
  }
}

export default App;
