import { useState } from "react";
import { GiSpeaker } from "react-icons/gi";
import { StHomeVideoPartsVolume } from "./style";

const Volume = ({ setVolume }) => {
  const [isVolumeBarOpen, setIsVolumeBarOpen] = useState(false);

  return (
    <StHomeVideoPartsVolume
      isVolumeBarOpen={isVolumeBarOpen}
      onClick={() => setIsVolumeBarOpen(!isVolumeBarOpen)}
    >
      <input type="range" onChange={setVolume} defaultValue="80" />
      <GiSpeaker />
    </StHomeVideoPartsVolume>
  );
};

export default Volume;
