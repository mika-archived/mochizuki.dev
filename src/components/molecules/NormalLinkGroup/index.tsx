import React from "react";
import styled from "styled-components";

import FontAwesome from "../../atoms/FontAwesome";
import Link from "../../atoms/Link";
import { Small } from "../../atoms/Typography";

type Props = {
  account: string;
  label: string;
  href: string;
  icon: string;
};

const Account = styled(Small)`
  flex: 1;
  overflow: hidden;
  color: #888;
  text-overflow: ellipsis;
`;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Label = styled(Small)`
  flex: 1;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
`;

const Icon = styled(FontAwesome)`
  font-size: 36px;
  line-height: 1.2;
  color: #333;
`;

const Texts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 0;
  margin-left: 6px;
`;

const NormalLinkGroup: React.FC<Props> = ({ account, label, href, icon }) => {
  return (
    <Anchor href={href}>
      <FlexBox>
        <Icon prefix="light" icon={icon} fixed />
        <Texts>
          <Label>{label}</Label>
          <Account>{account}</Account>
        </Texts>
      </FlexBox>
    </Anchor>
  );
};

export default NormalLinkGroup;
