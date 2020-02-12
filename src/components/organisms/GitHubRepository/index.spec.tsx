import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ExtractProps } from "../../../type-helper";

import GitHubRepository from ".";

const repository: ExtractProps<typeof GitHubRepository> = {
  nameWithOwner: "mika-sandbox/dotnet-window-capture",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  forks: { totalCount: 1 },
  primaryLanguage: { color: "#178600", name: "C#" },
  stargazers: { totalCount: 12 }
};

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { asFragment } = render(<GitHubRepository {...repository} />);

  expect(asFragment()).toMatchSnapshot();
});
