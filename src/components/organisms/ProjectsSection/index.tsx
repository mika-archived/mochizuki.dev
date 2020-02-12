import React from "react";
import styled from "styled-components";

import { Grid, Row } from "../../atoms/FlexGridLayout";
import { Heading2 } from "../../atoms/Headings";
import GitHubRepository from "../GitHubRepository";

import { ExtractProps } from "../../../type-helper";

type Props = {
  className?: string;
  projects: ExtractProps<typeof GitHubRepository>[];
};

const Heading = styled(Heading2)`
  color: #333;
`;

const Container = styled.div`
  height: 100%;
  margin-bottom: 16px;
`;

const RowContainer = styled(Row)`
  margin: 10px 0;

  @media screen and (min-width: 576px) {
    &:nth-child(odd) > ${Container} {
      margin-right: 7.5px;
    }

    &:nth-child(even) > ${Container} {
      margin-left: 7.5px;
    }
  }
`;

const ProjectsSection: React.FC<Props> = ({ className, projects }) => {
  return (
    <section className={className}>
      <Heading>Projects</Heading>
      <Grid rows={2}>
        {projects.map(w => (
          <RowContainer key={w.nameWithOwner} sm={2} md={1}>
            <Container>
              <GitHubRepository description={w.description} forks={w.forks} nameWithOwner={w.nameWithOwner} primaryLanguage={w.primaryLanguage} stargazers={w.stargazers} />
            </Container>
          </RowContainer>
        ))}
      </Grid>
    </section>
  );
};

export default ProjectsSection;
