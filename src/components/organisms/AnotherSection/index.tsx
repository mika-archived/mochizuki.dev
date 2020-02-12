import React from "react";
import styled from "styled-components";

import { Heading2 } from "../../atoms/Headings";
import Link from "../../atoms/Link";
import { Normal } from "../../atoms/Typography";

type Props = {
  another: string;
  className?: string;
  href: string;
};

const Anchor = styled(Link)`
  color: #888;
  text-decoration: none;
`;

const Another = styled(Normal)`
  color: #333;
`;

const Heading = styled(Heading2)`
  color: #333;
`;

const AnotherSection: React.FC<Props> = ({ another, className, href }) => {
  return (
    <section className={className}>
      <Heading>More?</Heading>
      <Another>{another}</Another>
      <Another>
        <Anchor href={href}>{href}</Anchor>
      </Another>
    </section>
  );
};

export default AnotherSection;
