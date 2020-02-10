import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { ExtractProps } from "../../../type-helper";

import GitHubRepository from ".";

const repository: ExtractProps<typeof GitHubRepository> = {
  nameWithOwner: "mika-sandbox/dotnet-window-capture",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  forks: { totalCount: 1 },
  primaryLanguage: { color: "#178600", name: "C#" },
  stargazers: { totalCount: 12 }
};

const LimitedBox1 = styled.div`
  width: 290px;
  height: 140px;
  margin: 10px 0;
`;

const LimitedBox2 = styled.div`
  width: 290px;
  height: 120px;
  margin: 10px 0;
`;

storiesOf("organisms/GitHubRepository", module).add("default", () => (
  <>
    {/* eslint-disable react/jsx-props-no-spreading */}
    <LimitedBox1>
      <GitHubRepository {...repository} />
    </LimitedBox1>
    <LimitedBox1>
      <GitHubRepository {...repository} />
    </LimitedBox1>
    <LimitedBox2>
      <GitHubRepository {...repository} />
    </LimitedBox2>
  </>
));
