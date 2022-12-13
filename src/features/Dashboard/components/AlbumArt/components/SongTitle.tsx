import { SongContainer, SongNumber, SongTitleContainer } from "./SongTitle.style"

export const SongTitle: React.FC = () => {
    const position = 99;
    const artist = 'AC/DC';
    const title = 'Back in black';
    return (<SongContainer><SongNumber>{'#'+position}</SongNumber><SongTitleContainer>{title}<br/>{artist}</SongTitleContainer></SongContainer>)
    
}