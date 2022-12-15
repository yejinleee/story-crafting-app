export const palette = {
  red: "#FF8E8E",
  green: "#C9F0CD",
  yellow: "#FFF7A1",
  blue: "#AACBFC",
  grey: "#A9A9A9",
  black: "#000000",
  white: "#FFFFFF"
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
  primary: "#8B8A8A",
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
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: spacing.m,
      marginTop: spacing.l,
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