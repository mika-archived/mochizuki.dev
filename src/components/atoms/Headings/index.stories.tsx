import React from "react";
import { storiesOf } from "@storybook/react";

import { Heading2 } from ".";

storiesOf("atoms/Headings", module).add("default", () => (
  <>
    <Heading2>Heading 2</Heading2>
  </>
));
