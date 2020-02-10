// Is this Atom component???

import React, { useEffect, useRef } from "react";
import Calendar from "github-calendar";
import styled from "styled-components";

import "github-calendar/dist/github-calendar-responsive.css";

type Props = {
  className?: string;
  login: string;
};

const Container = styled.div`
  width: 754px;
  min-height: 243px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const GitHubCalendar: React.FC<Props> = ({ className, login }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Calendar(container.current!, login, { responsive: true });
  });

  return (
    <Container>
      <div className={className} ref={container} />
    </Container>
  );
};

export default GitHubCalendar;
