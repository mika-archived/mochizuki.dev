import React from "react";
import styled from "styled-components";

import { Heading2 } from "../../atoms/Headings";
import GitHubCalendar from "../../atoms/GitHubCalendar";

import { ExtractProps } from "../../../type-helper";

type Props = ExtractProps<typeof GitHubCalendar>;

const Heading = styled(Heading2)`
  color: #333;
`;

const GitHubContributionSection: React.FC<Props> = ({ className, login }) => {
  return (
    <section className={className}>
      <Heading>GitHub Contributions</Heading>
      <GitHubCalendar login={login} />
    </section>
  );
};

export default GitHubContributionSection;
