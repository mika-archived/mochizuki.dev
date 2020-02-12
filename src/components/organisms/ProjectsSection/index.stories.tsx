import React from "react";
import { storiesOf } from "@storybook/react";

import Container from "../../atoms/Container";
import ProjectsSection from ".";

import { ExtractProps } from "../../../type-helper";

const projects: ExtractProps<typeof ProjectsSection>["projects"] = [
  {
    nameWithOwner: "mika-f/Robock",
    description: "Window Capture + Dynamic Wallpaper = Good Experience",
    primaryLanguage: { color: "#178600", name: "C#" },
    forks: { totalCount: 0 },
    stargazers: { totalCount: 3 }
  },
  {
    nameWithOwner: "vuejs/vue",
    description: "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    primaryLanguage: { color: "#f1e05a", name: "JavaScript" },
    forks: { totalCount: 23613 },
    stargazers: { totalCount: 156765 }
  },
  {
    nameWithOwner: "mika-sandbox/dotnet-window-capture",
    description: "Captures a window or desktop screen and renders it in WPF or DirectX.",
    primaryLanguage: { color: "#178600", name: "C#" },
    forks: { totalCount: 1 },
    stargazers: { totalCount: 12 }
  },
  {
    nameWithOwner: "facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    primaryLanguage: { color: "#f1e05a", name: "JavaScript" },
    forks: { totalCount: 27551 },
    stargazers: { totalCount: 143553 }
  }
];

storiesOf("organisms/ProjectsSection", module).add("default", () => (
  <>
    <Container>
      <ProjectsSection projects={projects} />
    </Container>
  </>
));
