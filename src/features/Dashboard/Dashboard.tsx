import { AlbumArt } from "./components/AlbumArt/AlbumArt";
import { Lyrics } from "./components/Lyrics/Lyrics";
import { FullScreenDashboard } from "./Dashboard.style";

export const Dashboard: React.FC = () => (
    <FullScreenDashboard>
        <AlbumArt/>
        <Lyrics/>
    </FullScreenDashboard>)