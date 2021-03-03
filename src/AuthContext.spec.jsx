import React from "react";
import {AuthProvider, Consumer} from "./AuthContext";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe('AuthContext', () => {
  describe('#logIn', () => {
    it('should set "logIn" to true', function () {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </Consumer>
        </AuthProvider>
      );
      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn('test@test.com', '123123');
      });
      expect(isLoggedIn).toBe(true);
    });
  });
  describe('#logOut', () => {
    it('should set "logIn" to false', function () {
      let isLoggedIn;
      let logIn;
      let logOut

      render(
        <AuthProvider>
          <Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              logOut = value.logOut;
              return null;
            }}
          </Consumer>
        </AuthProvider>
      );
      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn('test@test.com', '123123');
      });
      expect(isLoggedIn).toBe(true);
      act(() => {
        logOut();
      });
      expect(isLoggedIn).toBe(false);
    });
  });
});


