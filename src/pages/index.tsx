/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { FlippyCard } from "../components/FlippyCard";
// @ts-ignore
import ngInventoryGif from '../gifs/nginventory.gif';
// @ts-ignore
import neoCodeGif from '../gifs/neocode.gif';
// @ts-ignore
import nvimAdaptGif from '../gifs/nvimadapt.gif';
// @ts-ignore
import ticTacToe from '../gifs/tic-tac-toe.gif';
import LatestPosts from "../components/LatestPosts";
import H1 from "../components/elements/H1";
import P from "../components/elements/Paragraph";

const PolyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SiteTitle = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.pink};
  margin-top: 10px;
`;

const WelcomeText = styled.h6`
  font-size: 1.2rem;
  color: ${(props) => props.theme.green};
  margin-bottom: 0px;
`;

const CenteredContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 70%;
  font-size: 1.3rem;
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 1.2rem;
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  // background: ${(props) => props.theme.background};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  flex-wrap: wrap;
`

const TextCTAContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  background: ${(props) => props.theme.backgroundSecondary};
  box-shadow: ${(props) => props.theme.boxShadows};
  text-align: center;
  color: ${(props) => props.theme.textPrimary};
  border-radius: 12px;
  margin-bottom: 1rem !important;
  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
    width: 100%;
    padding: 1rem;
  }
`
const TextCTAHeading = styled.h1`
  font-size: 3rem;
`

const TextCTAGif = styled.img`
  width: 75%;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`

function Index() {

  return (
    <>
      <SEO title="Home" />
      <PolyDiv>
        <WelcomeText>welcome to</WelcomeText>
        <SiteTitle>Div/Nectar</SiteTitle>
        <CenteredContainer>
          <P centered={true}> This is my quaint little corner of the internet. Hope you learn something useful!</P>
          <P centered={true}>
            I created this site both as a resume for potential employers and to
            teach my fellow developers some of the tricks that I've learned over
            my 10 years of development. I'm particulary interested in dev tooling and optimizing
            workflows. I'm an avid Vim (Neovim to be precise) user and I generally avoid GUI
            text editors.
          </P>
        </CenteredContainer>
        <CtaContainer>
          <CardContainer>
            <FlippyCard
              title="ngInventory"
              subText="Wholesale POS System"
              tagLine="Modern POS system built for tobacco wholesalers. Reports to MSA.
            (coming soon)"
              gif={ngInventoryGif} />
            <FlippyCard
              title="NeoCode"
              subText="Vim for VsCoders"
              tagLine="Vscode user friendly Neovim config"
              gif={neoCodeGif} />
            <FlippyCard
              title="Nvim Adapt"
              subText="light/dark switcher"
              tagLine="An auto light/dark theme switcher for Vscode"
              gif={nvimAdaptGif} />
            <FlippyCard
              title="ngSupplyLogic"
              subText="Report Generating Software"
              tagLine="Generates EOD reports from SupplyLogic software database. Also provides sales information."
              gif={neoCodeGif} />
          </CardContainer>
        </CtaContainer>
      <H1 centered={true}>Latest Project:</H1>
        <TextCTAContainer>
          <TextCTAHeading>Online Tic-Tac-Toe</TextCTAHeading>
          <TextCTAGif src={ticTacToe} />
          <CenteredContainer>
            <p>This is a little game that I got an idea for over the past weekend. It's not too complex but I'm
          pretty proud that matchmaking works and the games happen in real-time.</p>
            <p>The app is using Angular, Angular Material, and Firebase. I created the program in
            about 2 days. You probably won't find anyone else playing to matchmake with, but you can
          simply open ano yourself.</p>
          </CenteredContainer>
        </TextCTAContainer>
      </PolyDiv>
      <H1 centered={true}>Newest Posts:</H1>
      <LatestPosts />
    </>
  );
}

export default Index;
