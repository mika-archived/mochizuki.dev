import React from "react";
import { storiesOf } from "@storybook/react";

import { Small, Normal, Large } from ".";

const Lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

storiesOf("atoms/Typographies", module).add("default", () => (
  <>
    <Small>{Lorem}</Small>
    <Normal>{Lorem}</Normal>
    <Large>{Lorem}</Large>
  </>
));
