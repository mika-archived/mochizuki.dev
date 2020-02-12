import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Small } from "../../atoms/Typography";
import LabeledIcon from "../../molecules/LabeledIcon";
import LanguageBadge from "../../molecules/LanguageBadge";
import LinkLabeledIcon from "../../molecules/LinkLabeledIcon";

type Props = {
  nameWithOwner: string;
  description: string;
  forks: { totalCount: number };
  primaryLanguage: { color: string; name: string };
  stargazers: { totalCount: number };
};

const Border = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: calc(100% - 32px);
  max-height: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NameWithOwner = styled(LinkLabeledIcon)`
  color: #333;
`;

const Description = styled.div<{ lines: number }>`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  flex: 1 1 auto;
  margin: 5px 0;
  overflow: hidden;
  line-height: 1.3;
  color: #888;
  text-overflow: ellipsis;

  /* 
   * multiline overflow: ellipsis does not supported in currently
   * but, -webkit-line-clamp has support by all of modern browsers.
   */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-line-clamp: ${props => props.lines};
`;

const Forks = styled(LabeledIcon)`
  margin: 1px 0 0 10px;
  color: #888;
`;

const Metadata = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
`;

const Stargazers = styled(LabeledIcon)`
  margin: 1px 0 0 10px;
  color: #888;
`;

const GitHubRepository: React.FC<Props> = ({ description, forks, nameWithOwner, primaryLanguage, stargazers }) => {
  const box = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<number>(-1);

  useEffect(() => {
    const boxHeight = box.current?.clientHeight!;
    const lineHeight = 14 * 1.2;

    setLines(Math.floor(boxHeight / lineHeight));
  });

  return (
    <Border>
      <NameWithOwner href={`https://github.com/${nameWithOwner}`} icon="book" prefix="light" label={nameWithOwner} />
      <Description ref={box} lines={lines}>
        <Small>{description}</Small>
      </Description>
      <Metadata>
        <LanguageBadge color={primaryLanguage.color} language={primaryLanguage.name} />
        <Stargazers icon="star" prefix="solid" label={`${stargazers.totalCount}`} />
        <Forks icon="code-branch" prefix="light" label={`${forks.totalCount}`} />
      </Metadata>
    </Border>
  );
};

export default GitHubRepository;
