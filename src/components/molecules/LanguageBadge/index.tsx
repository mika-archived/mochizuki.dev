import React from "react";
import styled from "styled-components";

import ColorCircle from "../../atoms/ColorCircle";
import { Small } from "../../atoms/Typography";

type Props = {
  color: string;
  language: string;
};

const FlexBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const LanguageColor = styled(ColorCircle)`
  width: 16px;
  height: 16px;
`;

const LanguageName = styled(Small)`
  margin-left: 4px;
  line-height: 1.3;
  color: #888;
`;

const LanguageBadge: React.FC<Props> = ({ color, language }) => {
  return (
    <FlexBox>
      <LanguageColor color={color} />
      <LanguageName>{language}</LanguageName>
    </FlexBox>
  );
};

export default LanguageBadge;
