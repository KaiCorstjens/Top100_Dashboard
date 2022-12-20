import { AlbumArtContainer, SongInfoContainer } from "./SongInfo.style";
import { SongStats } from "./components/SongStats";
import { SongTitle } from "./components/SongTitle";
import { TimeBar } from "./components/TimeBar";
import { AlbumArt } from "./components/AlbumArt";
import { useSelector } from "react-redux";
import { Song } from "../../types";
import { RootState } from "../../../../app/store";

export const SongInfo: React.FC = () => {
  const song: Song | undefined = useSelector(
    (state: RootState) => state.dashboard.song
  );

  return (
    <SongInfoContainer>
      <AlbumArtContainer>
        <SongTitle song={song} position={99} />
        <AlbumArt album_art_url={song?.album_art_url} />
        <TimeBar song={song} />
      </AlbumArtContainer>

      <SongStats />
    </SongInfoContainer>
  );
};
