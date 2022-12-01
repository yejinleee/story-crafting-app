const palette = {
  purple: "#5A31F4",
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#3a3f47",
  grey: "#9e9e9e",
  white: "#ffffff"
};

const spacing = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 24
};

const colors = {
  background: palette.white,
  foreground: palette.black,
  primary: palette.black,
  primaryForeground: "#FFFFFF",
  secondary: palette.grey,
  success: palette.green,
  failure: palette.red,
  card: "rgba(52, 52, 52, 0.1)"
};

const radius = {
  s: 4,
  m: 16,
  l: 24,
  xl: 40
};

export const theme = {
  colors,
  spacing,
  radius,
  style: {
    card: {
      backgroundColor: colors.card,
      padding: spacing.l,
      borderRadius: radius.m
    }
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
