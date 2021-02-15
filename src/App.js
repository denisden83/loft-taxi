import './App.css';
import React, {Component} from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Map from "./Map";
import Profile from "./Profile";

const PAGES = {
  login: (props) => <LogIn {...props} />,
  signup: (props) => <SignUp {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props} />,
};

class App extends Component {

  state = {currentPage: "login"};

  goToPage = (page) => this.setState({currentPage: page});

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

export default App;
