import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import ColorCircle from ".";

const Badge = styled(ColorCircle)`
  width: 24px;
  height: 24px;
`;

storiesOf("atoms/ColorCircle", module).add("default", () => (
  <>
    <Badge color="#178600" />
  </>
));
