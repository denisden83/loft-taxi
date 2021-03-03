import React from "react";
import Map from "./Map";
import {render} from "@testing-library/react";
import mapboxgl from "mapbox-gl";

jest.mock("mapbox-gl");
// jest.mock("mapbox-gl", () => {
//   return {Map: jest.fn().mockImplementation(function () {
//     return {remove: () =>{}};
//   })}
// });

describe("Map", () => {
  it("renders correctly", () => {
    const {getByTestId} = render(<Map/>);
    expect(mapboxgl.Map).toHaveBeenCalledWith({
      center: [30.3056504, 59.9429126],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 10,
    });
  });
  it('should render correctly', function () {
    const {container} = render(<Map/>);
    expect(container.innerHTML).toMatch("Map");
  });
});
