import React from "react";
import styled from "styled-components";

import Container from "../../atoms/Container";
import { XSmall } from "../../atoms/Typography";
import AnotherSection from "../../organisms/AnotherSection";
import GitHubContributionSection from "../../organisms/GitHubContributionSection";
import LinkSection from "../../organisms/LinkSection";
import ProfileSection from "../../organisms/ProfileSection";
import ProjectsSection from "../../organisms/ProjectsSection";

import { ExtractProps } from "../../../type-helper";

type Props = ExtractProps<typeof GitHubContributionSection> &
  ExtractProps<typeof LinkSection> &
  ExtractProps<typeof ProfileSection> &
  ExtractProps<typeof ProjectsSection> &
  ExtractProps<typeof AnotherSection>;

const RootContainer = styled(Container)`
  padding: 40px 0 20px;
`;

const MarginedProfileSection = styled(ProfileSection)`
  margin: 10px 0 40px;
`;

const MarginedProjectsSection = styled(ProjectsSection)`
  margin: 10px 0 40px;
`;

const MarginedGitHubContributionSection = styled(GitHubContributionSection)`
  margin: 10px 0 40px;
`;

const MarginedLinkSection = styled(LinkSection)`
  margin: 10px 0 40px;
`;

const MarginedAnotherSection = styled(AnotherSection)`
  margin: 10px 0 40px;
`;

const CopyrightFooter = styled.div`
  color: #888;
  text-align: center;
`;

const RootTemplate: React.FC<Props> = ({ another, description, href, icon, links, login, projects, name }) => {
  return (
    <RootContainer>
      <MarginedProfileSection description={description} icon={icon} name={name} />
      <MarginedProjectsSection projects={projects} />
      <MarginedGitHubContributionSection login={login} />
      <MarginedLinkSection links={links} />
      <MarginedAnotherSection another={another} href={href} />
      <CopyrightFooter>
        <XSmall>Copyright &copy; 2020 mochizuki.dev</XSmall>
      </CopyrightFooter>
    </RootContainer>
  );
};

export default RootTemplate;
