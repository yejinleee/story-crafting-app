export const palette = {
  red: "#FF8E8E",
  green: "#C9F0CD",
  yellow: "#FFF7A1",
  blue: "#AACBFC",
  grey: "#A9A9A9",
  black: "#000000",
  white: "#FFFFFF"
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.black,
    primaryForeground: "#FFFFFF",
    secondary: palette.grey,
    success: palette.green,
    failure: palette.red
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 24
  },
  radius: {
    s: 4,
    m: 16,
    l: 24,
    xl: 40
  },
  textVariants: {
    header: {
      fontFamily: "Raleway",
      fontSize: 36,
      fontWeight: "bold"
    },
    body: {
      fontFamily: "Merriweather",
      fontSize: 16
    }
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white
  }
};