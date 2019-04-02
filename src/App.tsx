import React from "react";

import Footer from "./components/Footer";
import { Container, Content } from "./components/Layout";

const App: React.FC = () => (
  <Container>
    <Content>Hello, World</Content>
    <Footer />
  </Container>
);

export default App;
