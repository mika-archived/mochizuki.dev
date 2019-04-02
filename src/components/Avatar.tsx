import styled, { css } from "styled-components";

const Avatar = styled.img`
  border-radius: 999px;
  ${props => props.width && css({ width: props.width })}
  ${props => props.height && css({ height: props.height })}
`;

export default Avatar;
