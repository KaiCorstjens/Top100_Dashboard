import { useState, useEffect, createRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { PosterContainer, PosterImage } from "./Poster.style";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { importAll } from "../../../utils/ImageLoader";
import { logger } from "../../../utils/logger";

export const Poster = () => {
  // const [imageUrls, setImageUrls] = useLocalStorage<string[]>(
  //   "posterImageUrls",
  //   []
  // );
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [shouldShowPosterGivenTime, setShouldShowPosterGivenTime] =
    useState<boolean>(true);

  const { showPoster, posterInterval, posterShowTime } = useSelector(
    (state: RootState) => state.dashboard
  );
  const imageRef = createRef<HTMLImageElement>();
  const inputRef = createRef<HTMLInputElement>();
  const themeContext = useContext(ThemeContext);

  const loadedImages = importAll<HTMLImageElement>(
    require.context(
      "../../../../../public/images/posters/",
      true,
      /\.(png|jpe?g|svg)$/
    )
  );

  useEffect(() => {
    if (shouldShowPosterGivenTime) {
      const interval = setInterval(() => {
        if (!showPoster) {
          clearInterval(interval);
        }
        setImageIndex((index) => {
          return index + 1 < loadedImages.length ? index + 1 : 0;
        });
        logger(imageIndex);
        setShouldShowPosterGivenTime(false);
      }, posterShowTime);
      return () => clearInterval(interval);
    }
  }, [
    loadedImages.length,
    imageIndex,
    showPoster,
    posterShowTime,
    shouldShowPosterGivenTime,
  ]);

  useEffect(() => {
    if (!shouldShowPosterGivenTime) {
      const interval = setInterval(() => {
        if (!showPoster) {
          clearInterval(interval);
        }
        setShouldShowPosterGivenTime(true);
      }, posterInterval);
      return () => clearInterval(interval);
    }
  }, [
    loadedImages.length,
    showPoster,
    posterInterval,
    shouldShowPosterGivenTime,
  ]);

  return (
    <PosterContainer
      style={{ display: shouldShowPosterGivenTime ? "inherit" : "none" }}
    >
      <PosterImage
        src={
          loadedImages.length > 0
            ? loadedImages[imageIndex]
            : themeContext.unknownAlbum
        }
        alt="poster"
        ref={imageRef}
        onClick={() => inputRef?.current?.click()}
      />
    </PosterContainer>
  );
};
