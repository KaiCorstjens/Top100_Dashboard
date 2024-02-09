import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { Song, SongStats } from "../../../types";
import {
  SongContainer,
  SongNumber,
  SongNumberContainer,
  SongTitleContainer,
} from "./SongTitle.style";

export type SongTitleProps = {
  song: Song | undefined;
  position: number;
};

export const SongTitle: React.FC<SongTitleProps> = (props) => {
  const stats: SongStats | undefined = useSelector(
    (state: RootState) => state.dashboard.stats
  );

  const showStats: boolean = useSelector(
    (state: RootState) => state.dashboard.showStats
  );

  return (
    <SongContainer>
      <SongNumberContainer
        style={{ display: stats?.position ? "inherit" : "none" }}
      >
        {showStats && <SongNumber>{"#" + stats?.position}</SongNumber>}
      </SongNumberContainer>
      <SongTitleContainer>
        {props.song?.title}
        <br />
        {props.song?.artist}
      </SongTitleContainer>
    </SongContainer>
  );
};
