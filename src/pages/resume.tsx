import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.pink};

  width: 100%;
  height: 150px;
  position: relative;
  z-index: 1;
  margin-bottom: 8rem;
`;

const AvatarCircle = styled.div`
  border-radius: 50%;
  width: 170px;
  height: 170px;
  top: 100px;
  background-color: ${props => props.theme.blue};
  position: absolute;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 2;
  @media only screen and (max-width: 600px) {
    height: 130px;
    width: 130px;
    top: 80px;
  }
`;

const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 0px;
`

const SplitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const ExperienceContainer = styled.div`
  width: 50%;
`

const SkillsContainer = styled.div`
  width: 50%;
`



const ResumePage: React.FC = () => {
    return (
        <div>
            <FlexDiv>
                <AvatarCircle></AvatarCircle>
                <HeaderBar>
                    <HeaderTitle>Josh Melton</HeaderTitle>
                </HeaderBar>
                <SplitContainer>
                  <ExperienceContainer>
                    These are my experiences
                  </ExperienceContainer>
                  <SkillsContainer>
                    These are my skills
                  </SkillsContainer>
                </SplitContainer>
            </FlexDiv>
        </div>
    );
};
export default ResumePage;
