import React from "react";
import { storiesOf } from "@storybook/react";

import BrandLinkGroup from ".";

storiesOf("molecules/NormalLinkGroup", module).add("default", () => (
  <>
    <BrandLinkGroup account="me@mochizuki.dev" label="Mail" href="https://twitter.com/MikazukiFuyuno" icon="envelope" />
  </>
));
