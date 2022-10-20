import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import WorldMap from "../maps/WorldMap"

it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<WorldMap />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});