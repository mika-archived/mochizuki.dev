import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import LanguageBadge from ".";

const Badge = styled(LanguageBadge)`
  width: 24px;
  height: 24px;
`;

storiesOf("atoms/LanguageBadge", module).add("default", () => (
  <>
    <Badge color="#178600" />
  </>
));
