import { ThemeSchema } from "./theme-schema";

export const top100Theme: ThemeSchema = {
  background:
    "url('" +
    process.env.PUBLIC_URL +
    "/images/backgrounds/popell_background.jpg')",
  unknownAlbum:
    process.env.PUBLIC_URL + "/images/unknown_album/unknown_album_top100.png",
  textColor: "#FFF",
  titleFontSize: "28px",
  votersFontSize: "24px",
  statsFontSize: "34px",
  borderColor: "#ffed2d",
  borderRadius: "25px",
  positionBorderRadius: "22px",
  timeBarColor: "#ffed2d",
  positionBgColor: "grey",
};
