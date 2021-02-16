import React from 'react';
import {render} from "@testing-library/react";
import Map from "./Map";

describe("Map", () => {
  it('should render correctly', function () {
    const {container} = render(<Map/>);
    expect(container.innerHTML).toMatch("Map");
  });
});
