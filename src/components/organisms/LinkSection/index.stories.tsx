import React from "react";
import { storiesOf } from "@storybook/react";

import { ExtractProps } from "../../../type-helper";

import LinkSection from ".";

const links: ExtractProps<typeof LinkSection>["links"] = [
  { account: "MikazukiFuyuno", label: "Twitter", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email", href: "/", icon: "envelope", prefix: "light" },
  { account: "MikazukiFuyuno", label: "Twitter", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email", href: "/", icon: "envelope", prefix: "light" },
  { account: "MikazukiFuyuno", label: "Twitter", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email", href: "/", icon: "envelope", prefix: "light" }
];

storiesOf("organisms/LinkSection", module).add("default", () => (
  <>
    <LinkSection links={links} />
  </>
));
