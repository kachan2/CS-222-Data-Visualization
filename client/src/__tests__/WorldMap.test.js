import React from "react";
import ShallowRenderer from 'react-shallow-renderer';

// Components
import WorldMap from "../maps/WorldMap"

it('render country map correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<WorldMap />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
