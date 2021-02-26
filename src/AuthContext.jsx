import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {emailIsValid, passwordIsValid} from "./validate";

export const {Consumer, Provider} = React.createContext({});

export class AuthProvider extends Component {
  state = {
    isLoggedIn: false
  };

  logIn = (email, password, cb) => {
    if (!emailIsValid(email) || !passwordIsValid(password)) {
      return;
    }
    this.setState({isLoggedIn: true}, cb);
  };

  logOut = (cb) => {
    this.setState({isLoggedIn: false}, cb);
  };

  render() {
    const {state: {isLoggedIn}, props: {children}, logIn, logOut} = this;

    return (
      <Provider value={{logIn, logOut, isLoggedIn}}>
        {children}
      </Provider>
    );
  }
}

AuthProvider.propTypes = {children: PropTypes.any}

export const withAuthHoc = (WrappedComponent) => {
  return class extends Component {
    static displayName = "AuthHocWrapper";

    render() {
      return (
        <Consumer>
          {value => {
            return <WrappedComponent {...value} {...this.props}/>
          }}
        </Consumer>
      );
    }
  };
};
