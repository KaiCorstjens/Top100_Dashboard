import { useState, useEffect, createRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { SponsorsContainer, SponsorsImage } from "./Sponsors.style";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { importAll } from "../../../utils/ImageLoader";

export const Sponsors = () => {
  // const [images, setImages] = useState<File[]>([]);
  // const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { showSponsors, sponsorInterval } = useSelector(
    (state: RootState) => state.dashboard
  );
  const imageRef = createRef<HTMLImageElement>();
  const inputRef = createRef<HTMLInputElement>();
  const themeContext = useContext(ThemeContext);

  const loadedImages = importAll<HTMLImageElement>(
    require.context(
      "../../../../../public/images/sponsors/",
      true,
      /\.(png|jpe?g|svg)$/
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showSponsors) {
        clearInterval(interval);
      }
      setImageIndex((index) => {
        return index + 1 < loadedImages.length ? index + 1 : 0;
      });
    }, sponsorInterval);
    return () => clearInterval(interval);
  }, [loadedImages.length, showSponsors, sponsorInterval]);

  return (
    <SponsorsContainer>
      <SponsorsImage
        src={
          loadedImages.length > 0
            ? loadedImages[imageIndex]
            : themeContext.unknownAlbum
        }
        alt="sponsor"
        ref={imageRef}
        onClick={() => inputRef?.current?.click()}
      />
      {/* <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onImageChange(e)}
        ref={inputRef}
        style={{ visibility: "hidden" }}
      /> */}
    </SponsorsContainer>
  );
};
