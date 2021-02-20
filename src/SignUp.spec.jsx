import React from 'react';
import {render} from "@testing-library/react";
import SignUp from "./SignUp";

describe("SignUp", () => {
  it('should render correctly', function () {
    const {getByPlaceholderText} = render(<SignUp/>);
    expect(getByPlaceholderText('Email')).toHaveAttribute('name', 'email');
    expect(getByPlaceholderText('First name')).toHaveAttribute('name', 'firstName');
    expect(getByPlaceholderText('Last name')).toHaveAttribute('name', 'lastName');
    expect(getByPlaceholderText('Password')).toHaveAttribute('name', 'password');
  });
});
