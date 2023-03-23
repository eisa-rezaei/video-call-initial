import styled, { keyframes } from "styled-components";

const isTyping = keyframes`
0%{margin-bottom: -7px;background-color:#efefef;}
50%{margin-bottom: 6px; background-color:#222;}
100%{margin-bottom: -7px;background-color:#efefef;}
`;

export const StHomeChatPart = styled.article`
  width: 32%;
  height: 100%;
  padding: 15px;
  background-color: #edf0f5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isMassage ? "space-between" : "flex-start"};
`;

export const StHomeChatPartChats = styled.section`
  width: 100%;
  height: 64vh;
  overflow: auto;
  padding: 20px 10px;
`;
export const StHomeChatPartUserName = styled.p`
  font-size: 0.7rem;
  position: absolute;
  left: 0;
  top: -20px;
`;

export const StHomeChatPartMassage = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.isUserBefore ? "30px" : "10px")};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  & img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    transition: all 0.2s ease;
    cursor: pointer;
    :hover {
      border-radius: 0%;
    }
  }
`;

export const StHomeChatPartMassageText = styled.div`
  min-width: 100px;
  max-width: 300px;
  min-height: 50px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => (props.isUser ? "#d1d3e2" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ::before {
    content: "";
    width: 10px;
    height: 15px;
    ${(props) => (props.isUser ? "right: -5px;" : "left: -5px;")}
    bottom: 0;
    position: absolute;
    background-color: ${(props) => (props.isUser ? "#d1d3e2" : "#fff")};
    clip-path: ${(props) =>
      props.isUser
        ? "polygon(0 0, 0% 100%, 100% 100%)"
        : "polygon(100% 0, 0% 100%, 100% 100%)"};
  }
`;

export const StHomeChatPartHeader = styled.header`
  width: 100%;
  min-height: 80px;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h4 {
    font-weight: 400;
  }
  border-bottom: 2px solid #e3e3e3;
`;
export const StHomeChatPartSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  & :nth-child(${(props) => props.isMassage}) {
    color: seagreen;
    background-color: #d5e6e8;
  }
  & button {
    padding: 15px 20px;
    border-radius: 15px;
    color: #777d8b;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const StHomeChatPartSendMsg = styled.section`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StHomeChatPartSendMsgIsTyping = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
`;

export const StHomeChatPartSendMsgIsTypingCircle = styled.div`
  width: 30px;
  height: 30px;
  padding: 2px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & span {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: gray;
    :nth-child(1) {
      animation: ${isTyping} 0.7s linear infinite;
    }
    :nth-child(2) {
      animation: ${isTyping} 0.7s 0.2s linear infinite;
    }
    :nth-child(3) {
      animation: ${isTyping} 0.7s 0.4s linear infinite;
    }
  }
`;

export const StHomeChatPartSendMsgInput = styled.div`
  width: 100%;
  height: 70px;
  padding: 8px;
  padding-left: 25px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  & span {
    min-width: 55px;
    min-height: 50px;
    border-radius: 20px;
    color: #fff;
    background-color: #48a08a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & input {
    width: 80%;
  }
`;
