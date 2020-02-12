import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import GitHubCalendar from ".";

const LimitedBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

storiesOf("atoms/GitHubCalendar", module).add("default", () => (
  <>
    <LimitedBox>
      <GitHubCalendar login="mika-f" />
    </LimitedBox>
  </>
));
