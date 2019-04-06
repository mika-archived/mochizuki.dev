import React from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Container from "./components/Layout";

const App: React.FC = () => (
  <Container>
    <Content />
    <Footer />
  </Container>
);

export default App;
