import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ChatPart from "./components/ChatPart";
import VideoStream from "./components/VideoStream";
import { StHomeContainer } from "./style";

const Home = () => {
  const token = localStorage.getItem("user");
  const [loggedIn, setLoggedIn] = useState(token);
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);
  return loggedIn ? (
    <StHomeContainer>
      <VideoStream />
      <ChatPart />
    </StHomeContainer>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default Home;
