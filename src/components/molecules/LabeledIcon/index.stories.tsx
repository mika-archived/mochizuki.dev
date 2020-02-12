import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import LabeledIcon from ".";

const SmallLabeledIcon = styled(LabeledIcon)`
  font-size: 14px;
  color: #888;
`;

const LimitedWidth = styled.div`
  width: 150px;
`;

storiesOf("molecules/LabeledIcon", module).add("default", () => (
  <>
    <LabeledIcon icon="book" prefix="light" label="mika-sandbox/dotnet-window-capture" />
    <LimitedWidth>
      <LabeledIcon icon="book" prefix="light" label="mika-sandbox/very-long-long-repository-name" />
    </LimitedWidth>
    <SmallLabeledIcon icon="star" prefix="solid" label="12" />
  </>
));
