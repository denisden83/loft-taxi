import './App.css';
import React, {Component} from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Map from "./Map";
import Profile from "./Profile";
import {withAuthHoc} from "./AuthContext";

const PAGES = {
  login: (props) => <LogIn {...props} />,
  signup: (props) => <SignUp {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props} />,
};

class App extends Component {

  state = {currentPage: "login"};

  goToPage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page});
    } else {
      switch (page) {
        case "login":
        case "signup":
          this.setState({currentPage: page});
          break;
        default:
          this.setState({currentPage: "login"});
      }
    }
  };

  render() {
    return (
      <>
        <main>
          <section>{PAGES[this.state.currentPage]({goToPage: this.goToPage})}</section>
        </main>
      </>
    );
  }
}

export default withAuthHoc(App);
