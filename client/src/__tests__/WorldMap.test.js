import React from "react";
import ShallowRenderer from 'react-shallow-renderer';

// Components
import WorldMap from "../maps/WorldMap"

it('renders correct world map', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<WorldMap />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});