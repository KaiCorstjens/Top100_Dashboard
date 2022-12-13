import { MutableRefObject, createRef, useEffect } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Song } from "../../../types";

export type LyricsContainerProps = {
    lyrics: string;
    song: Song;
}

export const LyricsContainer: React.FC<LyricsContainerProps> = (props) => {
    
    const containerRef = createRef<HTMLDivElement>();
    const progressed = props.song.time_elapsed / props.song.duration;
    const total_lyrics_lines = props.lyrics.split(/\r\n|\r|\n/).length;
    let negative_margin = 0;

    useEffect(() => {
        if (containerRef.current){
        const size = window
          .getComputedStyle(containerRef.current, null)
          .getPropertyValue("line-height");
          
        const lineHeight = Number(size.replace('px',''));
        console.log(lineHeight);
        const height = containerRef.current.clientHeight;   
        console.log(height); 
        }
      }, [containerRef.current]);
    console.log(total_lyrics_lines);
    return (<div ref={containerRef}>{props.lyrics}</div>);
}