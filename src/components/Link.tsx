import * as PropTypes from "prop-types";
import React from "react";

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = props => {
  const { children } = props;

  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default Link;
