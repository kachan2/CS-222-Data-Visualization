import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import MapChart from "../maps/CountryMap"

it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MapChart />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});