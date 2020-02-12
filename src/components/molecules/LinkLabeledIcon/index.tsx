import React from "react";
import styled from "styled-components";

import FontAwesome from "../../atoms/FontAwesome";
import Link from "../../atoms/Link";
import { Paragraph } from "../../atoms/Typography";

import { ExtractProps } from "../../../type-helper";

type Props = {
  className?: string;
  href: string;
  icon: string;
  label: string;
  prefix: ExtractProps<typeof FontAwesome>["prefix"];
};

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

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

const LinkLabeledIcon: React.FC<Props> = ({ className, href, icon, label, prefix }) => {
  return (
    <FlexBox className={className}>
      <FontAwesome fixed icon={icon} prefix={prefix} />
      <Label>
        <Anchor href={href}>{label}</Anchor>
      </Label>
    </FlexBox>
  );
};

export default LinkLabeledIcon;
