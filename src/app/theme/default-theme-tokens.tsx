import { ThemeSchema } from "./theme-schema";

export const defaultTheme: ThemeSchema = {
  background: "#FFF",
  unknownAlbum:
    process.env.PUBLIC_URL + "/images/unknown_album/unknown_album_default.jpg",
  textColor: "#000",
  titleFontSize: "26px",
  votersFontSize: "24px",
  statsFontSize: "34px",
  borderColor: "red",
  borderRadius: "5px",
  positionBorderRadius: "20px",
  timeBarColor: "#000",
};
