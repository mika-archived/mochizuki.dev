import React from "react";

type Props = {
  children: any;
  className?: string;
  href: string;
};

const Link: React.FC<Props> = ({ children, className, href }) => {
  if (href.startsWith("/")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={href} rel="noreferrer noopener">
      {children}
    </a>
  );
};

export default Link;
