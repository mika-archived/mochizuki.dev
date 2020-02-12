import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import LinkLabeledIcon from ".";

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<LinkLabeledIcon href="https://github.com" icon="book" prefix="light" label="mika-sandbox/repository-name" />);

  expect(asFragment()).toMatchSnapshot();
});
