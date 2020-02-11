import React from "react";
import styled from "styled-components";

import Avatar from "../../atoms/Avatar";
import { Normal, XLarge } from "../../atoms/Typography";

type Props = {
  className?: string;
  description: string;
  icon: string;
  name: string;
};

const Description = styled(Normal)`
  line-height: 1.2;
  color: #888;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const FixedArea = styled.div`
  flex: 0 0 auto;
`;

const Name = styled(XLarge)`
  margin: 4px 0 10px;
  color: #333;
`;

const SizedAvatar = styled(Avatar)`
  width: 96px;
  height: 96px;
`;

const StretchArea = styled.div`
  flex: 1 1 auto;
  margin-left: 16px;
`;

const ProfileSection: React.FC<Props> = ({ className, description, icon, name }) => {
  return (
    <section className={className}>
      <FlexBox>
        <FixedArea>
          <SizedAvatar src={icon} />
        </FixedArea>
        <StretchArea>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </StretchArea>
      </FlexBox>
    </section>
  );
};

export default ProfileSection;
