import { AlbumArtContainer, StyledAlbumArt, SongInfoContainer } from "./AlbumArt.style"
import { SongStats } from "./components/SongStats"
import { SongTitle } from "./components/SongTitle"
import { TimeBar } from "./components/TimeBar"

export const AlbumArt: React.FC = () => {
return (
    <SongInfoContainer>
<AlbumArtContainer>
    <SongTitle/>
    <StyledAlbumArt/>
    <TimeBar/>
</AlbumArtContainer>

<SongStats/>
</SongInfoContainer>)
}