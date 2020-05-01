import React from "react"
import styled from "styled-components"

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.pink};

  width: 100%;
  height: 150px;
  position: relative;
  z-index: 1;
`

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
`
const IntroCard = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 10px;
  width: 95%;
  height: 350px;
  margin-top: 1rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 0px;
`

const HeaderSubtitle = styled.h3`
  color: whitesmoke;
  margin-top: 0.3rem;
`

const TimeLineContainer = styled.div`
  display: flex;
  &:before {
    content: "";
    position: absolute;
    height: 90%;
    width: 2px;
    background: ${props => props.theme.pink};
    left: 50%;
    @media only screen and (max-width: 600px) {
      left: 5px;
    }
  }
`
const TimeLineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`

const TimeLineItem = styled.li`
  display: flex;
  position: relative;
  left: 25px;
  max-width: 40%;
  margin-bottom: 20px;
  background: #e1e1dd;
  padding: 10px;
  margin: 4rem;
  &:nth-child(odd) {
    margin-right: auto;
  }
  &:nth-child(even) {
    margin-left: auto;
  }
  &:before {
    content: "";
    width: 0;
    height: 0;
    top: 0;
  }
  &:nth-child(odd):before {
    border-top: 1em solid #e1e1dd;
    border-right: 1em solid transparent;
    position: absolute;
    right: -1em;
  }
  &:nth-child(even):before {
    border-top: 1em solid #e1e1dd;
    border-left: 1em solid transparent;
    right: auto;
    left: 0;
  }
`

const TimelineItemContent = styled.div`
  max-width: 40%;
  margin-right: auto;
  &:nth-child(even) {
    margin-left: auto;
  }
`

const IntroParagraph = styled.p`
  padding: 1rem;
`

const ResumePage: React.FC = () => {
  return (
    <FlexDiv>
      <AvatarCircle></AvatarCircle>
      <HeaderBar>
        <HeaderTitle>Josh Melton</HeaderTitle>
        <HeaderSubtitle>Front End React Developer</HeaderSubtitle>
      </HeaderBar>
      <IntroCard>
        <IntroParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          risus sed euismod iaculis. Etiam et tincidunt erat, id malesuada
          velit. Nam vel risus sit amet lectus blandit volutpat a vel orci. Nunc
          posuere turpis eu velit bibendum, sed ullamcorper eros congue. Sed
          eget dolor dolor. Curabitur pretium lacinia enim, non sodales felis
          tincidunt at. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Pellentesque finibus, dui at
          vestibulum mattis, dui erat tincidunt enim, at aliquam odio lacus non
          augue. Curabitur tincidunt aliquet aliquet. Ut vehicula egestas dui eu
          pulvinar. Aenean ornare ut augue in ullamcorper. Donec id erat sit
          amet nunc lacinia vestibulum. In viverra justo ultricies porta
          dignissim. Morbi varius ultrices elit, eget pellentesque neque
          scelerisque sed.
        </IntroParagraph>
      </IntroCard>
      <h1>Experience</h1>
      {/* <TimeLineContainer>
        <TimeLineList>
          <TimeLineItem>
            psum dolor sit amet, consectetur adipiscing elit. Sed pharetra risus
            sed euismod iaculis. Etiam et tincidunt erat, id malesuada velit.
            Nam vel risus sit amet lectus blandit volutpat a vel orci. Nunc
            posuere turpis eu velit bibendum, sed ullamcorper eros congue. Sed
            eget dolor dolor.
          </TimeLineItem>
          <TimeLineItem>
            psum dolor sit amet, consectetur adipiscing elit. Sed pharetra risus
            sed euismod iaculis. Etiam et tincidunt erat, id malesuada velit.
            Nam vel risus sit amet lectus blandit volutpat a vel orci. Nunc
            posuere turpis eu velit bibendum, sed ullamcorper eros congue. Sed
            eget dolor dolor.
          </TimeLineItem>
        </TimeLineList>
      </TimeLineContainer> */}
    </FlexDiv>
  )
}
export default ResumePage
