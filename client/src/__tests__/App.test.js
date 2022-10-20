import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// Components
import App from "../app/App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("root");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders text", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Welcome to UIUC Data Visualizaiton");
});
