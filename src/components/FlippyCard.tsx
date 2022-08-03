import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components";
// @ts-ignore
import { FaGithub } from 'react-icons/fa';


const CtaCard = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  height: 250px;
  margin: 16px;
  border-radius: 16px;
  min-width: 300px;
  width: 21%;
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  padding: 16px;
  height: 100%;
`;

const CardTitle = styled.h1`
  margin-bottom: 6px;
  text-align: center;
  /* font-size: 3.3rem; */
`;

const CardParagraph = styled.p`
  text-align: center;
`;

const CardSubtext = styled.span`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  opacity: 80%;
  font-size: 1rem;
`;

const CardBackContents = styled.div`
  width: 100%;
  height: 100%;
  padding: none;
  margin: none;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
`;

const CardGif = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const BottomBar = styled.div`
  border-radius: 0 0 16px 16px;
  background: RGBA(0,0,0, 0.4);
  opacity: 60%;
  height: 32px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
`

const BarLink = styled.a`
  text-decoration: none;
  transition: all 100ms ease-in-out;
  :hover {
    transform: scale(3);
  }
`

export const FlippyCard = (props: {title: string, tagLine: string, subText: string, gif: any}) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [animationDone, setAnimationDone] = useState(true);
  const [performFlipBack, setPerformFlipBack] = useState(false);
  const [performFlip, setPerformFlip] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <CtaCard
      onClick={() => {
        console.log('clicked')
        if (!isFlipped && animationDone) {
          setPerformFlip(true);
        } else if (isFlipped && animationDone) {
          setPerformFlipBack(true);
          setIsFlipped(false);
        }
      }}
      onAnimationEnd={() => {
        if (performFlip) {
          setIsFlipped(true);
          setPerformFlip(false);
          setAnimationDone(true);
        }
        if (performFlipBack) {
          setPerformFlipBack(false);
          setIsFlipped(false);
          setAnimationDone(true);
        }
      }}
      className={`
      ${performFlip ? "flip" : ""} 
      ${performFlipBack ? "flipBack" : ""}
      ${isFullScreen ? "modal" : ""}
      `}
    >
      {isFlipped ? (
        <CardBackContents>
          <CardGif src={props.gif}></CardGif>
          <BottomBar>
            <BarLink href="https://github.com/Sewdohe/NeoCode"><FaGithub /></BarLink>
          </BottomBar>
        </CardBackContents>
      ) : (
        <CardContents>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtext>{props.subText}</CardSubtext>
          <CardParagraph>
            {props.tagLine}
          </CardParagraph>
        </CardContents>
      )}
    </CtaCard>
  );
};
