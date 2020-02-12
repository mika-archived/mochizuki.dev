import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Heading2 } from ".";

afterEach(cleanup);

test("does not have changes from snapshot in Heading2", () => {
  const { asFragment } = render(<Heading2>Heading 2</Heading2>);

  expect(asFragment()).toMatchSnapshot();
});
