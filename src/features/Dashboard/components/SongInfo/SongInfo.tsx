import { AlbumArtContainer, SongInfoContainer } from "./SongInfo.style";
import { SongStats } from "./components/SongStats";
import { SongTitle } from "./components/SongTitle";
import { TimeBar } from "./components/TimeBar";
import { AlbumArt } from "./components/AlbumArt";
import { useSelector } from "react-redux";
import { Song } from "../../types";
import { RootState } from "../../../../app/store";
import { Poster } from "../Poster/Poster";

export const SongInfo: React.FC = () => {
  const song: Song | undefined = useSelector(
    (state: RootState) => state.dashboard.song
  );
  const showSlido: boolean = useSelector(
    (state: RootState) => state.dashboard.showSlido
  );

  const showStats: boolean = useSelector(
    (state: RootState) => state.dashboard.showStats
  );
  const showPoster: boolean = useSelector(
    (state: RootState) => state.dashboard.showPoster
  );

  return (
    <SongInfoContainer
      style={{
        marginLeft: showSlido ? "10%" : "auto",
      }}
    >
      <AlbumArtContainer>
        <SongTitle song={song} position={99} />
        <AlbumArt album_art_url={song?.album_art_url} />
        <TimeBar song={song} />
      </AlbumArtContainer>
      {showStats && <SongStats />}
      {showPoster && <Poster />}
    </SongInfoContainer>
  );
};
