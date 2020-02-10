import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Container from ".";

const ColoredContainer = styled(Container)`
  height: 200px;
  background-color: #ccc;
`;

storiesOf("atoms/Container", module).add("default", () => (
  <>
    <ColoredContainer>Container Content</ColoredContainer>
  </>
));
