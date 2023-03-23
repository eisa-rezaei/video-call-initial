import { useEffect, useState } from "react";
import { StHomeVideoPartsRecord } from "./style";

const Timer = () => {
  const [time, setTime] = useState({ min: 0, second: 0 });

  useEffect(() => {
    if (time.second >= 60) {
      setTime({ ...time, min: time.min + 1, second: 0 });
    } else {
      setTimeout(() => {
        setTime({ ...time, second: time.second + 1 });
      }, 1000);
    }
  }, [time]);

  return (
    <StHomeVideoPartsRecord>
      <span />
      <p>
        {time.min < 10 ? `0${time.min}` : `${time.min}`}&nbsp;:&nbsp;
        {time.second < 10 ? `0${time.second}` : time.second}
      </p>
    </StHomeVideoPartsRecord>
  );
};

export default Timer;
