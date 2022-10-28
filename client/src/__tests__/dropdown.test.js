import React from "react";
import ShallowRenderer from 'react-shallow-renderer';

import DropDown from "../buttons/dropdown";

it('renders correctly react-test-renderer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DropDown />);
    const result = renderer.getRenderOutput();
  
    expect(result).toMatchSnapshot();
});
  