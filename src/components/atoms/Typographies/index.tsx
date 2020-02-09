import styled from "styled-components";

const BaseTypography = styled.p`
  font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
`;

const Small = styled(BaseTypography)`
  font-size: 14px;
`;

const Normal = styled(BaseTypography)`
  font-size: 16px;
`;

const Large = styled(BaseTypography)`
  font-size: 18px;
`;

export { Small, Normal, Large };
