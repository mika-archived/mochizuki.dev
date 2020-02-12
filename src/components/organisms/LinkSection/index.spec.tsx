import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ExtractProps } from "../../../type-helper";

import LinkSection from ".";

const links: ExtractProps<typeof LinkSection>["links"] = [
  { account: "MikazukiFuyuno", label: "Twitter 1", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email 1", href: "/", icon: "envelope", prefix: "light" },
  { account: "MikazukiFuyuno", label: "Twitter 2", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email 2", href: "/", icon: "envelope", prefix: "light" },
  { account: "MikazukiFuyuno", label: "Twitter 3", href: "/", icon: "twitter", prefix: "brands" },
  { account: "me@mochizuki.moe", label: "Email 3", href: "/", icon: "envelope", prefix: "light" }
];

afterEach(cleanup);

test("does not have changes from snapshot", () => {
  const { asFragment } = render(<LinkSection links={links} />);

  expect(asFragment()).toMatchSnapshot();
});
