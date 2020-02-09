import React from "react";
import { storiesOf } from "@storybook/react";

import FontAwesome from ".";

storiesOf("atoms/FontAwesome", module)
  .add("Brand", () => (
    <>
      <FontAwesome prefix="brands" icon="twitter" />
      Twitter Bird
    </>
  ))
  .add("Solid", () => (
    <>
      <FontAwesome prefix="solid" icon="rabbit" />
      Solid Rabbit
    </>
  ))
  .add("Regular", () => (
    <>
      <FontAwesome prefix="regular" icon="rabbit" />
      Regular Rabbit
    </>
  ))
  .add("Fixed", () => (
    <ul>
      <li>
        <FontAwesome prefix="brands" icon="twitter" fixed />
        Text
      </li>
      <li>
        <FontAwesome prefix="solid" icon="rabbit" fixed />
        Text
      </li>
      <li>
        <FontAwesome prefix="regular" icon="rabbit" fixed />
        Text
      </li>
    </ul>
  ));
