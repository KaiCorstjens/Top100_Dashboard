import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { Song, SongStats } from "../../../types";
import {
  SongContainer,
  SongNumber,
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

  return (
    <SongContainer>
      <SongNumber style={{ display: stats?.position ? "table-cell" : "none" }}>
        {"#" + stats?.position}
      </SongNumber>
      <SongTitleContainer>
        {props.song?.title}
        <br />
        {props.song?.artist}
      </SongTitleContainer>
    </SongContainer>
  );
};
