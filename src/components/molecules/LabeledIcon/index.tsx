import React from "react";
import styled from "styled-components";

import FontAwesome from "../../atoms/FontAwesome";
import { Paragraph } from "../../atoms/Typography";

import { ExtractProps } from "../../../type-helper";

type Props = {
  className?: string;
  icon: string;
  label: string;
  prefix: ExtractProps<typeof FontAwesome>["prefix"];
};

const FlexBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Label = styled(Paragraph)`
  margin-left: 4px;
  overflow: hidden;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LabeledIcon: React.FC<Props> = ({ className, icon, label, prefix }) => {
  return (
    <FlexBox className={className}>
      <FontAwesome fixed icon={icon} prefix={prefix} />
      <Label>{label}</Label>
    </FlexBox>
  );
};

export default LabeledIcon;
