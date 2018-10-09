import React, { Component } from "react";
import "./App.css";
import BookSearchContainer from "./containers/BookSearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookSearchContainer />
      </div>
    );
  }
}

export default App;
