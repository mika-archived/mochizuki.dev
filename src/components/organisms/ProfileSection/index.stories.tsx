import React from "react";
import { storiesOf } from "@storybook/react";

import ProfileSection from ".";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

storiesOf("organisms/ProfileSection", module).add("default", () => (
  <>
    <ProfileSection icon="https://assets.mochizuki.moe/anna.png" name="Fuyuno Mikazuki" description={lorem} />
  </>
));
