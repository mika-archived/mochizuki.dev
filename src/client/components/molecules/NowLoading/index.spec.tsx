import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import NowLoading from ".";

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<NowLoading />);

  expect(asFragment()).toMatchSnapshot();
});
