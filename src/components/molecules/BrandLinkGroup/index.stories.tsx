import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import BrandLinkGroup from ".";

const LimitedWidth = styled.div`
  width: 200px;
`;

storiesOf("molecules/BrandLinkGroup", module).add("default", () => (
  <>
    <BrandLinkGroup account="MikazukiFuyuno" label="Twitter" href="https://twitter.com/MikazukiFuyuno" icon="twitter" />
    <LimitedWidth>
      <BrandLinkGroup account="0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39" label="Ethereum" href="https://twitter.com/MikazukiFuyuno" icon="ethereum" />
    </LimitedWidth>
  </>
));
