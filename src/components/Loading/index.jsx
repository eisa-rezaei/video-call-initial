import React, { useEffect, useRef } from "react";
import gif from "./demo.mp4";
import { StLoadingContainer } from "./style";

const Loading = () => {
  const ref = useRef();
  useEffect(() => {
    ref?.current.play();
  });
  return (
    <StLoadingContainer>
      <video
        src={gif}
        width="150px"
        height="150px"
        autoPlay
        loop
        ref={ref}
      ></video>
    </StLoadingContainer>
  );
};

export default Loading;
