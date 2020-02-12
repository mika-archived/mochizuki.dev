import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import NormalLinkGroup from ".";

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<NormalLinkGroup account="MikazukiFuyuno" label="Twitter" href="https://twitter.com/MikazukiFuyuno" icon="envelope" />);

  expect(asFragment()).toMatchSnapshot();
});
