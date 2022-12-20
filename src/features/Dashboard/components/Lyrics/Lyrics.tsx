import { createRef, useEffect } from "react";
import { Song } from "../../types";
import { StyledLyrics } from "./Lyrics.style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

export const Lyrics: React.FC = () => {
  const lyricsZ = `
    Back in black
I hit the sack
I've been too long, I'm glad to be back
Yes, I'm let loose
From the noose
That's kept me hanging about
I've been looking at the sky
'Cause it's gettin' me high
Forget the hearse 'cause I never die
I got nine lives
Cat's eyes
Abusin' every one of them and running wild
'Cause I'm back
Yes, I'm back
Well, I'm back
Yes, I'm back
Well, I'm back, back
Well, I'm back in black
Yes, I'm back in black
Back in the back
Of a Cadillac
Number one with a bullet, I'm a power pack
Yes, I'm in a bang
With a gang
They've got to catch me if they want me to hang
'Cause I'm back on the track
And I'm beatin' the flack
Nobody's gonna get me on another rap
So look at me now
I'm just makin' my play
Don't try to push your luck, just get out of my way
'Cause I'm back
Yes, I'm back
Well, I'm back
Yes, I'm back
Well, I'm back, back
Well, I'm back in black
Yes, I'm back in black
Well, I'm back, yes, I'm back
Well, I'm back, yes, I'm back
Well, I'm back, back
Well, I'm back in black
Yes, I'm back in black
Oh, yeah
Oh, yeah
Take my love
Oh, yeah, yeah
Oh, yeah, yeah, ooh, yeah
Well, I'm back (I'm back)
Back (I'm back)
Back (I'm back)
Back (I'm back)
Back (I'm back)
Back
Back in black
Yes, I'm back in black
I've hit the sack
    `;

  const lyrics = "";

  const song: Song | undefined = useSelector(
    (state: RootState) => state.dashboard.song
  );

  const containerRef = createRef<HTMLDivElement>();
  const lyricsRef = createRef<HTMLDivElement>();

  // scrolling
  useEffect(() => {
    if (lyricsRef.current && containerRef.current && song) {
      const lineHeight = window
        .getComputedStyle(lyricsRef.current, null)
        .getPropertyValue("line-height");

      const lineHeightNum = Number(lineHeight.replace("px", ""));

      const height = containerRef.current.clientHeight;
      const total_lyrics_lines = lyrics.split(/\r\n|\r|\n/).length;

      // Calculate how much time each line takes to sing
      const seconds_per_line = song.duration / total_lyrics_lines;
      const lines_in_container = height / lineHeightNum;
      // After how many seconds should we start scrolling
      const min_scroll_after_s = seconds_per_line * (lines_in_container / 2);
      // How many lines should we scroll
      const lines_to_scroll =
        Math.max(song.time_elapsed - min_scroll_after_s, 0) / seconds_per_line;

      const scroll = lines_to_scroll * lineHeightNum;

      // Make sure we don't scroll more than necessary
      let negative_margin = Math.min(
        scroll,
        lyricsRef.current.clientHeight - height
      );
      negative_margin = negative_margin * -1;
      lyricsRef.current.style.marginTop = negative_margin + "px";
    }
  }, [lyricsRef.current, containerRef.current, lyrics, song]);

  return (
    <StyledLyrics ref={containerRef}>
      <div ref={lyricsRef}>{lyrics}</div>
    </StyledLyrics>
  );
};
