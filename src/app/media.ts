const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "1024px", //675px
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const deviceWidth = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tablet: `(max-width: ${width.tablet})`,
  laptop: `(max-width: ${width.laptop})`,
  laptopL: `(max-width: ${width.laptopL})`,
  desktop: `(max-width: ${width.desktop})`,
  desktopL: `(max-width: 9999px)`,
};

export const deviceHeight = {
  //937

  desktop: "937px",
};
