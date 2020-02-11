import React from "react";

import { Heading2 } from "../../atoms/Headings";
import GitHubCalendar from "../../atoms/GitHubCalendar";

import { ExtractProps } from "../../../type-helper";

type Props = ExtractProps<typeof GitHubCalendar>;

const GitHubContribution: React.FC<Props> = ({ className, login }) => {
  return (
    <section className={className}>
      <Heading2>GitHub Contributions</Heading2>
      <GitHubCalendar login={login} />
    </section>
  );
};

export default GitHubContribution;
