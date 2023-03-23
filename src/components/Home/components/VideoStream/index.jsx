import React from "react";
import { IoIosPeople } from "react-icons/io";
import {
  MdBookmarkRemove,
  MdCallEnd,
  MdOutlineChevronLeft,
} from "react-icons/md";
import { BsArrowsFullscreen, BsFillMicMuteFill } from "react-icons/bs";
import { GoGear, GoPlusSmall } from "react-icons/go";
import { FaVideo } from "react-icons/fa";
import { users } from "../../../../data/data";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Timer from "./Timer";
import Volume from "./Volume";
import {
  StHomeVideoPartsControls,
  StHomeVideoPartsHead,
  StHomeVideoPartsPublisher,
  StHomeVideoPartsUsersIn,
  StHomeVideoStream,
  StHomeVideoStreamFooter,
  StHomeVideoStreamFooterAnimation,
  StHomeVideoStreamFooterText,
  StHomeVideoStreamHeader,
  StHomeVideoStreamHeaderTeamIcon,
  StHomeVideoStreamInfoBar,
  StHomeVideoStreamInfoBarPart,
  StHomeVideoStreamStream,
  StHomeVideoStreamVideo,
} from "./style";

const ws = new WebSocket("ws://localhost:8002");

const VideoStream = () => {
  const [isFullScreenVid, setIsFillScreenVid] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const publisher = users.find((item) => item.isPublisher);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 2000, height: 2800 / (16 / 9) },
        audio: true,
      })
      .then((stream) => {
        let video = streamRef.current;
        video.srcObject = stream;
      })
      .catch((err) => console.log("error massage :", err));
  };

  const getFrame = () => {
    const canvas = canvasRef.current;
    const video = streamRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const data = canvas.toDataURL("image/png");
    return data;
  };

  useEffect(() => {
    getVideo();
    streamRef.current.volume = 1;
  }, [streamRef]);

  useEffect(() => {
    const FPS = 10;
    ws.addEventListener("open", () => {
      console.log(`Connected to "ws://localhost:8002"`);
      setInterval(() => {
        ws.send(getFrame());
      }, 1000 / FPS);
    });
  }, []);

  const setVolume = (e) => {
    streamRef.current.volume = e.target.value / 100;
  };

  return (
    <StHomeVideoStream isFullScreenVid={isFullScreenVid}>
      <StHomeVideoStreamHeader>
        <span>
          <MdOutlineChevronLeft />
        </span>
        OverView of new real estate proposals
        <StHomeVideoStreamHeaderTeamIcon>
          <IoIosPeople /> Team
        </StHomeVideoStreamHeaderTeamIcon>
      </StHomeVideoStreamHeader>
      <StHomeVideoStreamInfoBar>
        <StHomeVideoStreamInfoBarPart>
          <StHomeVideoStreamInfoBarPart>
            <IoIosPeople /> Invited to call : <span>6</span>
          </StHomeVideoStreamInfoBarPart>
          <StHomeVideoStreamInfoBarPart className="vid-absent-people">
            <MdBookmarkRemove /> Absent people : <span>5</span>
          </StHomeVideoStreamInfoBarPart>
        </StHomeVideoStreamInfoBarPart>
        <StHomeVideoStreamInfoBarPart className="add-user-icon">
          <GoPlusSmall /> <p>Add user to the call</p>
        </StHomeVideoStreamInfoBarPart>
      </StHomeVideoStreamInfoBar>

      <StHomeVideoStreamVideo isFullScreenVid={isFullScreenVid}>
        {/* stream start */}
        <StHomeVideoStreamStream
          autoPlay
          loop
          ref={streamRef}
        ></StHomeVideoStreamStream>
        {/* stream end */}

        <StHomeVideoPartsHead>
          <StHomeVideoPartsPublisher>
            <img src={publisher.userAvatar} alt={publisher.userId} />
            <span>
              <h6>publisher</h6>
              <p>{publisher.userId}</p>
            </span>
          </StHomeVideoPartsPublisher>
        </StHomeVideoPartsHead>

        {isRecording ? <Timer /> : null}

        <StHomeVideoPartsUsersIn isFullScreenVid={isFullScreenVid}>
          {users.map(({ userAvatar, userId }) => (
            <img src={userAvatar} alt={userId} key={userId} />
          ))}
        </StHomeVideoPartsUsersIn>
        <StHomeVideoPartsControls>
          <span onClick={() => setIsFillScreenVid(!isFullScreenVid)}>
            <BsArrowsFullscreen />
          </span>
          <span>
            <BsFillMicMuteFill />
          </span>
          <span>
            <MdCallEnd />
          </span>
          <span onClick={() => setIsRecording(!isRecording)}>
            <FaVideo />
          </span>
          <span>
            <GoGear />
          </span>
        </StHomeVideoPartsControls>
        <Volume setVolume={setVolume} />
      </StHomeVideoStreamVideo>
      <StHomeVideoStreamFooter>
        <StHomeVideoStreamFooterAnimation>
          {new Array(10).fill().map((_, index) => (
            <span key={index} />
          ))}
        </StHomeVideoStreamFooterAnimation>
        <StHomeVideoStreamFooterText>
          <h4>Title</h4>
          <p>
            Thanks for sending all those complement transcripts through - we've
            been really happy
          </p>
        </StHomeVideoStreamFooterText>
      </StHomeVideoStreamFooter>
      <canvas ref={canvasRef} hidden />
    </StHomeVideoStream>
  );
};

export default VideoStream;
