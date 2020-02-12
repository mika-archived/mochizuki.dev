import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import LinkLabeledIcon from ".";

const SmallLabeledIcon = styled(LinkLabeledIcon)`
  font-size: 14px;
  color: #888;
`;

const LimitedWidth = styled.div`
  width: 150px;
`;

storiesOf("molecules/LinkLabeledIcon", module).add("default", () => (
  <>
    <LinkLabeledIcon href="https://github.com/mika-sandbox/dotnet-window-capture" icon="book" prefix="light" label="mika-sandbox/dotnet-window-capture" />
    <LimitedWidth>
      <LinkLabeledIcon href="https://github.com" icon="book" prefix="light" label="mika-sandbox/very-long-long-repository-name" />
    </LimitedWidth>
    <SmallLabeledIcon href="https://twitter.com" icon="star" prefix="solid" label="12" />
  </>
));
