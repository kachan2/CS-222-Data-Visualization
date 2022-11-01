import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import DropDown from "../buttons/dropdown";

it('should render a DropDown', () => {
    render(
        <BrowserRouter>
            <DropDown />
        </BrowserRouter>
    )

    expect(screen.getByRole("button", { name: /Select Map/i })).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Country Map")).toBeInTheDocument();
    expect(screen.getByText("World Map")).toBeInTheDocument();
})
