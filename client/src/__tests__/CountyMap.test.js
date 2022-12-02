import React from "react";
import ShallowRenderer from 'react-shallow-renderer';

// Components
import CountyMap from "../maps/CountyMap"

it('render country map correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<CountyMap />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
