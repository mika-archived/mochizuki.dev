import React from "react";
import styled from "styled-components";

const FlexFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const Paragraph = styled.p`
  color: rgba(244, 245, 247, 0.5);
`;

const Footer: React.FC = () => {
  const isShowAsRange = new Date().getFullYear() !== 2019;
  return (
    <FlexFooter>
      <Paragraph>
        <small>
          Copyright &copy;&nbsp;
          {isShowAsRange ? `2019 - ${new Date().getFullYear()}` : `2019`}
          &nbsp;mochizuki.dev
        </small>
      </Paragraph>
    </FlexFooter>
  );
};

export default Footer;
