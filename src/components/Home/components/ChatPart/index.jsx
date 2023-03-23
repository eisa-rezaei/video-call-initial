import React, { useEffect, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import defaultUserImage from "assets/avatars/default.jpeg";
import { useState } from "react";
import { currentUserDetail } from "data/data";
import Participants from "./Participants";
import { useSelector } from "react-redux";
import selectors from "redux/massages/selectors";
import { useDispatch } from "react-redux";
import {
  removeIsTypingList,
  sendMassage,
  setIsTypingList,
} from "redux/massages/actions";

import {
  StHomeChatPart,
  StHomeChatPartChats,
  StHomeChatPartHeader,
  StHomeChatPartMassage,
  StHomeChatPartMassageText,
  StHomeChatPartSendMsg,
  StHomeChatPartSendMsgInput,
  StHomeChatPartSendMsgIsTyping,
  StHomeChatPartSendMsgIsTypingCircle,
  StHomeChatPartSwitch,
  StHomeChatPartUserName,
} from "./style";

const ws = new WebSocket("ws://localhost:8002");

const ChatPart = () => {
  const massages = useSelector(selectors.getMassages);
  const isTypingList = useSelector(selectors.getIsTypingList);
  const [isMassage, setIsMassage] = useState(true);
  const [userProfile, setUserProfile] = useState();
  const massageRef = useRef();
  const dispatch = useDispatch();
  const lastMassageRef = useRef();

  const sendMassageHandler = () => {
    const massage = massageRef.current.value;

    const newMassage = {
      userAvatar: currentUserDetail.userAvatar,
      userId: currentUserDetail.userId,
      content: massage,
      isCall: false,
      id: Math.floor(Math.random() * 1000),
    };
    dispatch(sendMassage(newMassage));
    ws.send(JSON.stringify({ massage: massage, id: currentUserDetail.userId }));
    massageRef.current.value = "";
  };

  const watchProfileHandler = (id) => () => {
    setIsMassage(false);
    setUserProfile(id);
  };

  useEffect(() => {
    lastMassageRef.current.scrollIntoView();
  }, [massages]);

  useEffect(() => {
    const logMassage = ({ data }) => {
      const myData = JSON.parse(data);
      if (myData.id !== currentUserDetail.userId && myData.id) {
        dispatch(
          sendMassage({
            userAvatar: defaultUserImage,
            userId: "Guest User",
            content: myData.massage,
            isCall: false,
            id: Math.floor(Math.random() * 1000),
          })
        );
        console.log("render");
      }
    };
    ws.addEventListener("message", logMassage);
    return () => {
      ws.removeEventListener("message", logMassage);
    };
  }, [dispatch]);

  return (
    <StHomeChatPart isMassage={isMassage}>
      <StHomeChatPartHeader>
        <h4>Group Chat</h4>
        <StHomeChatPartSwitch isMassage={isMassage ? "1" : "2"}>
          <button onClick={() => setIsMassage(true)}>Massages</button>
          <button
            onClick={() => {
              setIsMassage(false);
              setUserProfile("");
            }}
          >
            Participant
          </button>
        </StHomeChatPartSwitch>
      </StHomeChatPartHeader>
      {isMassage ? (
        <>
          <StHomeChatPartChats>
            {massages?.map(
              ({ content, userAvatar, userId, id, isCall }, index) => {
                const isUser = currentUserDetail.userId === userId;
                const isUserBefore = userId !== massages[index - 1]?.userId;
                const isLastOne = index === massages.length - 1;
                return (
                  <StHomeChatPartMassage
                    key={id}
                    isUser={isUser}
                    isUserBefore={isUserBefore}
                    ref={isLastOne ? lastMassageRef : null}
                  >
                    {!isUser && (
                      <img
                        src={userAvatar}
                        alt={userId}
                        onClick={watchProfileHandler(userId)}
                      />
                    )}

                    <StHomeChatPartMassageText isUser={isUser}>
                      <StHomeChatPartUserName
                        onClick={watchProfileHandler(userId)}
                      >
                        {isUserBefore ? (isUser ? "You" : userId) : null}
                      </StHomeChatPartUserName>
                      <p>{content}</p>
                    </StHomeChatPartMassageText>
                  </StHomeChatPartMassage>
                );
              }
            )}
          </StHomeChatPartChats>
          <StHomeChatPartSendMsg>
            {isTypingList.length ? (
              <StHomeChatPartSendMsgIsTyping>
                <StHomeChatPartSendMsgIsTypingCircle>
                  <span />
                  <span />
                  <span />
                </StHomeChatPartSendMsgIsTypingCircle>
                {isTypingList.map((item, index) => {
                  const isCurrentUser = item === currentUserDetail.userId;
                  if (
                    isTypingList[index] !==
                    isTypingList[isTypingList.length - 1]
                  ) {
                    return <p key={index}>{item}&nbsp;and&nbsp;</p>;
                  } else {
                    return (
                      <p key={index}>
                        {isCurrentUser ? "you" : item}&nbsp;
                        {isTypingList.length > 1 ? "are" : "is"}
                      </p>
                    );
                  }
                })}
                &nbsp;Typing
              </StHomeChatPartSendMsgIsTyping>
            ) : (
              <StHomeChatPartSendMsgIsTyping />
            )}
            <StHomeChatPartSendMsgInput>
              <input
                placeholder="Write your massage"
                ref={massageRef}
                onFocus={() =>
                  dispatch(setIsTypingList(currentUserDetail.userId))
                }
                onBlur={() =>
                  dispatch(removeIsTypingList(currentUserDetail.userId))
                }
              />
              <span onClick={() => sendMassageHandler()}>
                <FaTelegramPlane />
              </span>
            </StHomeChatPartSendMsgInput>
          </StHomeChatPartSendMsg>
        </>
      ) : (
        <Participants id={userProfile} />
      )}
    </StHomeChatPart>
  );
};

export default ChatPart;
