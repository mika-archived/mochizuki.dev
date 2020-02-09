import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import ColorCircle from ".";

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<ColorCircle color="#178600" />);

  expect(asFragment()).toMatchSnapshot();
});
