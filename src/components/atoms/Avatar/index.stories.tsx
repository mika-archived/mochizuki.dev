import React from "react";
import { storiesOf } from "@storybook/react";

import Avatar from ".";

storiesOf("atoms/Avatar", module).add("default", () => (
  <>
    <Avatar height={128} width={128} src="https://assets.mochizuki.moe/anna.png" />
  </>
));
