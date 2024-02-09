import React from "react";
import { Song } from "../../../types";
import {
  TimeBarContainer,
  TimeBarProgression,
  TimeBarProgressionContainer,
  TimeContainer,
} from "./TimeBar.style";

export type TimeBarProps = {
  song: Song | undefined;
};

export const TimeBar: React.FC<TimeBarProps> = (props) => {
  const timeElapsed = props.song?.time_elapsed ?? 0;
  const timeTotal = props.song?.duration ?? 1;
  const timeElapsedString = new Date(timeElapsed)
    .toISOString()
    .substring(14, 19);
  const timeTotalString = new Date(timeTotal).toISOString().substring(14, 19);
  const progressed = (timeElapsed / timeTotal) * 100;

  const timeBar = React.useCallback(() => {
    return (
      <TimeBarContainer>
        <TimeContainer style={{ paddingLeft: "5px" }}>
          {timeElapsedString}
        </TimeContainer>
        <TimeBarProgressionContainer>
          <TimeBarProgression style={{ width: progressed + "%" }} />
        </TimeBarProgressionContainer>
        <TimeContainer style={{ paddingRight: "5px" }}>
          {timeTotalString}
        </TimeContainer>
      </TimeBarContainer>
    );
  }, [progressed, timeElapsedString, timeTotalString]);

  return timeBar();
};
