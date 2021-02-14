import './App.css';
import React, {Component} from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Map from "./Map";
import Profile from "./Profile";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <main>
          <section><LogIn /></section>
          <section><SignUp /></section>
          <section><Map /></section>
          <section><Profile /></section>
        </main>
      </>
    );
  }
}

export default App;
