import { ThemeSchema } from "./theme-schema";

export const moerebuukTheme: ThemeSchema = {
  background:
    "url('" +
    process.env.PUBLIC_URL +
    "/images/backgrounds/moerebuuk_background.jpg')",
  unknownAlbum:
    process.env.PUBLIC_URL +
    "/images/unknown_album/unknown_album_moerebuuk.png",
  textColor: "#FFF",
  titleFontSize: "28px",
  votersFontSize: "24px",
  statsFontSize: "34px",
  borderColor: "#fb9a09",
  borderRadius: "25px",
  positionBorderRadius: "20px",
  timeBarColor: "#fb9a09",
  positionBgColor: "#fb9a09",
};
