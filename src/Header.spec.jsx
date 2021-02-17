import React from 'react';
import {render} from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it('should render correctly', function () {
    const {getByText} = render(<Header/>);
    expect(getByText('log out')).toBeInTheDocument();
  });
});
