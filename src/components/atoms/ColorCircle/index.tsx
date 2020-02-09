import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  color: string;
};

const Circle = styled.div`
  background-color: ${props => props.color};
  border-radius: 9999px;
`;

const ColorCircle: React.FC<Props> = ({ className, color }) => {
  return <Circle className={className} color={color} />;
};

export default ColorCircle;
