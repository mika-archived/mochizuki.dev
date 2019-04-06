import * as PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Link from "./Link";

const Anchor = styled(Link)`
  margin: 0 8px;
  color: #333;
  transition: 0.2s ease;
  transition-property: color;

  :hover {
    color: #82c91e;
  }
`;

const Icon = styled.i`
  font-size: 32px;
`;

type Props = {
  href: string;
  icon: string;
};

const LinkIcon: React.FC<Props> = ({ href, icon }) => (
  <Anchor href={href}>
    <Icon className={icon} />
  </Anchor>
);

LinkIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default LinkIcon;
