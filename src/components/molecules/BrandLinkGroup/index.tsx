import React from "react";
import styled from "styled-components";

import FontAwesome from "../../atoms/FontAwesome";
import Link from "../../atoms/Link";
import { Small } from "../../atoms/Typographies";

type Props = {
  account: string;
  label: string;
  href: string;
  icon: string;
};

const Account = styled(Small)`
  color: #888;
`;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Label = styled(Small)`
  color: #333;
`;

const Icon = styled(FontAwesome)`
  font-size: 36px;
  line-height: 1.2;
  color: #333;
`;

const BrandLinkGroup: React.FC<Props> = ({ account, label, href, icon }) => {
  return (
    <Anchor href={href}>
      <FlexBox>
        <Icon prefix="brands" icon={icon} fixed />
        <div>
          <Label>{label}</Label>
          <Account>{account}</Account>
        </div>
      </FlexBox>
    </Anchor>
  );
};

export default BrandLinkGroup;
