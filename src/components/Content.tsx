import React from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import LinkIcon from "./LinkIcon";

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Container = styled.div`
  padding: 32px 16px;
  text-align: center;
  background-color: #f4f5f7;
  border-radius: 8px;

  @media (max-width: 720px) {
    width: calc(90% - 32px);
  }

  @media (min-width: 720px) {
    width: 640px;
  }
`;

const Content: React.FC = () => (
  <FlexContainer>
    <Container>
      <Avatar src="https://ik.imagekit.io/mikazuki/anna.png" height="160px" width="160px" />
      <h1>Fuyuno Mikazuki</h1>
      <h3>Software Developer / Server Side Engineer</h3>
      {/* prettier-ignore */}
      <p>
        都内企業で Perl, Vue.js, JavaScript を書く IT エンジニアをしています。
        <br />
        日常のちょっとした不便などを解決したりするのが好きです。
        <br />
        最近は VTuber 含む xR 系, Unity に興味があります。
      </p>
      <div>
        <LinkIcon href="https://github.com/mika-f" icon="fab fa-github" />
        <LinkIcon href="https://twitter.com/MikazukiFuyuno" icon="fab fa-twitter" />
        <LinkIcon href="https://mikazuki.hatenablog.jp" icon="fal fa-book" />
        <LinkIcon href="https://mochizuki.moe" icon="fal fa-browser" />
      </div>
    </Container>
  </FlexContainer>
);

export default Content;
