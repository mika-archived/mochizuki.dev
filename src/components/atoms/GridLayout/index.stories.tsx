import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Container from "../Container";
import { Grid, Row } from ".";

const ColoredContainer = styled(Container)`
  height: 200px;
  background-color: #888;
`;

storiesOf("atoms/GridLayout", module).add("default", () => (
  <>
    <ColoredContainer>
      <Grid rows={12}>
        <Row sm={4} md={3}>
          Hello 1
          <br />
          Hello 2
        </Row>
        <Row sm={4} md={3}>
          Hello 2
        </Row>
        <Row sm={4} md={3}>
          Hello 3
        </Row>
        <Row sm={12} md={3}>
          Hello 4
        </Row>
      </Grid>
    </ColoredContainer>
  </>
));
