import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default Container;
