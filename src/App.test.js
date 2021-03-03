import React from "react";
import {act, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import mapboxgl from "mapbox-gl";
import {AuthProvider} from "./AuthContext";
import Header from "./Header";

// jest.mock("./Map",);
jest.mock("mapbox-gl");

describe('renders App component', () => {
  it('should render Log In page', function () {
    render(
      <AuthProvider>
        <App/>
      </AuthProvider>
    );
    const element = screen.getByText(/Log In/i);
    expect(element).toBeInTheDocument();
  });
  describe('navigation', () => {
    describe('navigation from Log In page', () => {
      beforeEach(() => {
        render(
          <AuthProvider>
            <App/>
          </AuthProvider>
        );
      });
      it('should open Sign Up page', function () {
        userEvent.click(screen.getByText(/sign up/i));
        expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
      });
      it('should open Map page', async function () {
        userEvent.paste(screen.getByPlaceholderText('User name'), "test@test.com");
        userEvent.paste(screen.getByPlaceholderText('Password'), "123123");
        expect(screen.getByPlaceholderText('Password')).toHaveValue("123123");
        expect(screen.getByPlaceholderText('User name')).toHaveValue("test@test.com");
        userEvent.click(screen.getByText('Enter'),
          {target: {email: {value: "test@test.com"}, password: {value: "123123"}}}
        );
        expect(screen.getByText(/Map/)).toBeInTheDocument();
      });
    });
    describe('navigation from Sign Up page', () => {
      beforeEach(() => {
        render(
          <AuthProvider>
            <App/>
          </AuthProvider>
        );
        userEvent.click(screen.getByText('sign up'));
      })
      it('should render Sign Up page', function () {
        expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
      })
      it('should open Log In page', function () {
        userEvent.click(screen.getByText('log in'));
        expect(screen.getByText('Log In')).toBeInTheDocument()
      });
      it('try to go to Map page, not loggedIn, redirect to Log in page', function () {
        userEvent.click(screen.getByText(/Enter/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument();
      });
    });
    describe('navigation from Map page', () => {
      beforeEach(() => {
        render(
          <AuthProvider>
            <App/>
          </AuthProvider>
        );
        userEvent.click(screen.getByText('Enter'),
          {target: {email: {value: "test@test.com"}, password: {value: "123123"}}}
        );
      })
      it('should render Map page', function () {
        expect(screen.getByText(/Map/)).toBeInTheDocument();
      })
      it('should open Map page', function () {
        userEvent.click(screen.getByText('map'));
        expect(screen.getByText('Map')).toBeInTheDocument()
      });
      it('should open Profile page', function () {
        userEvent.click(screen.getByText(/profile/));
        expect(screen.getByText(/Profile/)).toBeInTheDocument()
      });
      it('should log out redirect to Log In page', function () {
        userEvent.click(screen.getByText(/log out/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument()
        userEvent.click(screen.getByText(/sign up/));
        userEvent.click(screen.getByText(/Enter/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument()
      });
    });
    describe('navigation from Profile page', () => {
      beforeEach(() => {
        render(
          <AuthProvider>
            <App/>
          </AuthProvider>
        );
        userEvent.click(screen.getByText('Enter'),
          {target: {email: {value: "test@test.com"}, password: {value: "123123"}}}
        );
        userEvent.click(screen.getByText(/profile/));
      })
      it('should render Profile page', function () {
        expect(screen.getByText(/Profile/)).toBeInTheDocument();
      })
      it('should open Map page', function () {
        userEvent.click(screen.getByText('map'));
        expect(screen.getByText('Map')).toBeInTheDocument()
      });
      it('should open Profile page', function () {
        userEvent.click(screen.getByText(/profile/));
        expect(screen.getByText(/Profile/)).toBeInTheDocument()
      });
      it('should log out redirect to Log In page', function () {
        userEvent.click(screen.getByText(/log out/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument()
        userEvent.click(screen.getByText(/sign up/));
        userEvent.click(screen.getByText(/Enter/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument()
      });
    });
  });
});
