import React from "react";
import styled, { keyframes } from "styled-components";

import { ReactClassName } from "../../../type-helper";
import FontAwesome from "../../atoms/FontAwesome";

const LoadingRabbit = styled(FontAwesome)`
  font-size: 24px;
  color: #f294ad;
`;

const AnnaKeyframes = keyframes`
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: translateY(20px);
  }

  5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
    transform: translateY(17.5px);
  }
`;
const AnnaAnimation = styled.div`
  display: inline-block;
  margin-right: 10px;
  color: #433673;
  animation: ${AnnaKeyframes} 5s ease-in-out infinite;
`;

type JumpingProps = {
  delay: number;
};

const JumpingKeyframes = keyframes`
  0%, 10%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: translateY(20px);
  }

  5%, 15%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
    transform: translateY(17.5px);
  }

  20% {
    transform: translateY(20px);
  }

  25% {
    transform: translateY(5px);
  }
`;
const JumpingAnimation = styled.div<JumpingProps>`
  display: inline-block;
  margin: 1px;
  color: #433673;
  transform: translateY(17.5px);
  animation: ${JumpingKeyframes} 5s -${props => props.delay}s infinite;
`;

type Props = ReactClassName;

const LoadingAnimation: React.FC<Props> = ({ className }) => {
  const animations = "Now Loading...".split("");
  const delays = 1.5 / animations.filter(w => w !== "").length;
  return (
    <div className={className}>
      <AnnaAnimation>
        <LoadingRabbit prefix="solid" icon="rabbit" fixed />
      </AnnaAnimation>
      {animations.map((str, idx) => {
        const delay = 5 - (idx + 1) * delays;
        return str === "" ? (
          " "
        ) : (
          <JumpingAnimation key={`${str}-${delay}`} delay={delay}>
            {str}
          </JumpingAnimation>
        );
      })}
    </div>
  );
};

export default LoadingAnimation;
