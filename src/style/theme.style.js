const palette = {
  purple: "#5A31F4",
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#3a3f47",
  grey: "#9e9e9e",
  white: "#f8f8f8"
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.black,
    secondary: palette.grey,
    success: palette.green,
    failure: palette.red
  },
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24
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