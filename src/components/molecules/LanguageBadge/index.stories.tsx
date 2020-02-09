import React from "react";
import { storiesOf } from "@storybook/react";

import LanguageBadge from ".";

storiesOf("molecules/LanguageBadge", module).add("default", () => (
  <>
    <LanguageBadge color="#178600" language="C#" />
  </>
));
