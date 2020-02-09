import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import Link from ".";

afterEach(cleanup);

test("does not have changes from snapshot with internal link", () => {
  const { asFragment } = render(<Link href="/another">Another Link</Link>);

  expect(asFragment()).toMatchSnapshot();
});

test("does not have changes from snapshot with external link", () => {
  const { asFragment } = render(<Link href="https://example.com/another">Another Link</Link>);

  expect(asFragment()).toMatchSnapshot();
});
