import {render, screen} from '@testing-library/react';
import App from './App';
import React from "react";
import userEvent from "@testing-library/user-event";

// jest.mock('./SignUp', () => () => <h1>Sign Up</h1>)
// jest.mock('./Map', () => () => <h1>Map</h1>)
// jest.mock('./Profile', () => () => <h1>Profile</h1>)

describe('renders App component', () => {
  it('should render Log In page', function () {
    render(<App/>);
    const element = screen.getByText(/Log In/i);
    expect(element).toBeInTheDocument();
  });
  describe('navigation', () => {
    describe('navigation from Log In page', () => {
      beforeEach(() => {
        render(<App/>);
      });
      it('should open Sign Up page', function () {
        userEvent.click(screen.getByText(/sign up/i));
        expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
      });
      it('should open Map page', function () {
        userEvent.click(screen.getByText('Enter'));
        expect(screen.getByText(/Map/)).toBeInTheDocument()
      });
    });
    describe('navigation from Sign Up page', () => {
      beforeEach(() => {
        render(<App/>);
        userEvent.click(screen.getByText('sign up'));
      })
      it('should render Sign Up page', function () {
        expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
      })
      it('should open Log In page', function () {
        userEvent.click(screen.getByText('log in'));
        expect(screen.getByText('Log In')).toBeInTheDocument()
      });
      it('should open Map page', function () {
        userEvent.click(screen.getByText(/Enter/));
        expect(screen.getByText(/Map/)).toBeInTheDocument()
      });
    });
    describe('navigation from Map page', () => {
      beforeEach(() => {
        render(<App/>);
        userEvent.click(screen.getByText('Enter'));
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
      it('should open Log In page', function () {
        userEvent.click(screen.getByText(/log out/));
        expect(screen.getByText(/Log In/)).toBeInTheDocument()
      });
    });
  });
});
