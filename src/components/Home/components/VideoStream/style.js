import styled, { css, keyframes } from "styled-components";
import bgImage from "./img-7.jpeg";

const talkingAnimation = keyframes`
0%{height:10px;}
25%{height:20px;background-color:#48a08a50;}
50%{height:40px; background-color:#48a08a;}
75%{height:20px;background-color:#48a08a50;}
100%{height:10px;}

`;

const fullScreenMixin = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
`;
const normalScreenMixin = css`
  width: 68%;
  height: 100%;
  padding: 15px;
`;

export const StHomeVideoStream = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  ${(props) => (props.isFullScreenVid ? fullScreenMixin : normalScreenMixin)}
`;
export const StHomeVideoStreamHeader = styled.header`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #efefef;
  & span {
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 20px;
    color: #aaa;
    background-color: #edf0f5;
    border-radius: 10px;
    line-height: 10px;
  }
`;
export const StHomeVideoStreamHeaderTeamIcon = styled.div`
  padding: 5px;
  margin-left: 20px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #505a95;
  line-height: 10px;
  display: flex;
  align-items: center;
  background-color: #d1d3e1;
  & svg {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

export const StHomeVideoStreamInfoBar = styled.div`
  width: 100%;
  min-height: 60px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    width: 30px;
    margin: 0 5px;
  }
  & .add-user-icon {
    color: #48a08a;
    margin-right: 10px;
    & p {
      margin: 0 5px;
    }
    & svg {
      width: 30px;
      height: 30px;
      padding: 5px;
      font-weight: bold;
      color: #fff;
      background-color: #48a08a;
      border-radius: 12px;
      margin-right: 10px;
    }
  }
`;
export const StHomeVideoStreamInfoBarPart = styled.div`
  min-width: 150px;
  min-height: 50px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  & svg {
    font-size: 1.2rem;
    color: #a0a0a0;
  }
  & span {
    width: 30px;
    height: 30px;
    padding: 10px;
    color: #22aa22;
    border-radius: 10px;
    background-color: #22aa2220;
    line-height: 10px;
    margin-left: 10px;
    text-align: center;
  }
  .vid-absent-people {
    & span {
      background-color: #fb606020;
      color: #fb6060;
    }
  }
`;

export const StHomeVideoStreamVideo = styled.section`
  width: 100%;
  min-height: ${(props) => (props.isFullScreenVid ? "700px" : "510px")};
  border-radius: 15px;
  position: ${(props) => (props.isFullScreenVid ? "static" : "relative")};
  overflow: hidden;
  background-image: ${(props) =>
    props.isFullScreenVid ? null : `url(${bgImage})`};
  background-size: cover;
`;

export const StHomeVideoStreamStream = styled.video`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
`;

export const StHomeVideoPartsHead = styled.div`
  min-width: 450px;
  min-height: 50px;
  top: 20px;
  left: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

export const StHomeVideoPartsPublisher = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  & img {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }
  & span {
    margin-left: 10px;
    color: #fff;
  }
`;

export const StHomeVideoPartsRecord = styled.div`
  width: 100px;
  min-height: 40px;
  padding: 5px 10px;
  background-color: #ffffff40;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  font-size: 0.7rem;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-25%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  & span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #fff;
    background-color: red;
  }
`;

export const StHomeVideoPartsUsersIn = styled.div`
  width: ${(props) => (props.isFullScreenVid ? "110px" : "75px")};
  max-height: 500px;
  top: 20px;
  right: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  & img {
    width: 100%;
    height: ${(props) => (props.isFullScreenVid ? "110px" : "75px")};
    margin-bottom: 10px;
    border-radius: 20px;
    border: 3px solid #fff;
  }
`;

export const StHomeVideoPartsControls = styled.div`
  width: 370px;
  min-height: 60px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-45%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    color: #fff;
    padding: 15px;
    background-color: #ffffff40;
    backdrop-filter: blur(10px);
    border-radius: 50%;
    line-height: 10px;
    cursor: pointer;
    :nth-child(3) {
      padding: 25px;
      font-size: 1.2rem;
      border-radius: 30px;
      background-color: #fb6060;
    }
  }
`;

export const StHomeVideoPartsVolume = styled.div`
  width: 50px;
  height: 50px;
  min-height: ${(props) => (props.isVolumeBarOpen ? "210px" : "50px")};
  left: 30px;
  bottom: 40px;
  color: #fff;
  padding: 15px;
  overflow: hidden;
  position: absolute;
  border-radius: 30px;
  background-color: #ffffff40;
  backdrop-filter: blur(10px);
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;

  & input {
    margin-bottom: 80px;
    transform: rotate(-90deg);
    display: ${(props) => (props.isVolumeBarOpen ? "block" : "none")};
  }
`;

export const StHomeVideoStreamFooter = styled.footer`
  width: 100%;
  min-height: 65px;
  padding-top: 15px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StHomeVideoStreamFooterText = styled.div`
  & h4 {
    color: #b0b0b0;
    margin: 5px 0;
  }
`;

export const StHomeVideoStreamFooterAnimation = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    width: 2px;
    height: 40px;
    margin: 0 2px;
    background-color: #48a08a;
    :nth-child(1) {
      animation: ${talkingAnimation} 1.3s 0.5s linear infinite;
    }
    :nth-child(2) {
      animation: ${talkingAnimation} 1.3s linear infinite;
    }
    :nth-child(3) {
      animation: ${talkingAnimation} 1.3s 0.3s linear infinite;
    }
    :nth-child(4) {
      animation: ${talkingAnimation} 1.3s 0.2s linear infinite;
    }
    :nth-child(5) {
      animation: ${talkingAnimation} 1.3s 1s linear infinite;
    }
    :nth-child(6) {
      animation: ${talkingAnimation} 1.3s 0.7s linear infinite;
    }
    :nth-child(7) {
      animation: ${talkingAnimation} 1.3s linear infinite;
    }
    :nth-child(8) {
      animation: ${talkingAnimation} 1.3s 0.1s linear infinite;
    }
    :nth-child(9) {
      animation: ${talkingAnimation} 1.3s 0.3s linear infinite;
    }
    :nth-child(10) {
      animation: ${talkingAnimation} 1.3s 0.15s linear infinite;
    }
  }
  & h4 {
  }
`;
