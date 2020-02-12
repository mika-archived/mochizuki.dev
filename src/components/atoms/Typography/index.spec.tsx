import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Small, Normal, Large } from ".";

afterEach(cleanup);

test("does not have changes from snapshot in Small", () => {
  const { asFragment } = render(<Small>Small</Small>);

  expect(asFragment()).toMatchSnapshot();
});

test("does not have changes from snapshot in Normal", () => {
  const { asFragment } = render(<Normal>Normal</Normal>);

  expect(asFragment()).toMatchSnapshot();
});

test("does not have changes from snapshot in Large", () => {
  const { asFragment } = render(<Large>Large</Large>);

  expect(asFragment()).toMatchSnapshot();
});
