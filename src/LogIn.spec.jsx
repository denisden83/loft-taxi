import React from 'react';
import {render} from "@testing-library/react";
import LogIn from "./LogIn";


describe("LogIn", () => {
  it('should render correctly', function () {
    const {getByPlaceholderText} = render(<LogIn/>);
    expect(getByPlaceholderText('User name')).toHaveAttribute('name', 'email');
    expect(getByPlaceholderText('Password')).toHaveAttribute('name', 'password');
  });
});
