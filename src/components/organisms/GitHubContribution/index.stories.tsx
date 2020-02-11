import React from "react";
import { storiesOf } from "@storybook/react";

import GitHubContribution from ".";

storiesOf("organisms/GitHubContribution", module).add("default", () => (
  <>
    <GitHubContribution login="mika-f" />
  </>
));
