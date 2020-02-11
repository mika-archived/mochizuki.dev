import React from "react";
import { storiesOf } from "@storybook/react";

import GitHubContributionSection from ".";

storiesOf("organisms/GitHubContributionSection", module).add("default", () => (
  <>
    <GitHubContributionSection login="mika-f" />
  </>
));
