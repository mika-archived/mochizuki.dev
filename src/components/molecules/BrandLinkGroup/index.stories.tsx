import React from "react";
import { storiesOf } from "@storybook/react";

import BrandLinkGroup from ".";

storiesOf("molecules/BrandLinkGroup", module).add("default", () => (
  <>
    <BrandLinkGroup account="MikazukiFuyuno" label="Twitter" href="https://twitter.com/MikazukiFuyuno" icon="twitter" />
  </>
));
