import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import LanguageBadge from ".";

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<LanguageBadge color="#178600" language="C#" />);

  expect(asFragment()).toMatchSnapshot();
});
