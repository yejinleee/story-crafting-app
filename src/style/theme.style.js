export const palette = {
  red: "#ff8d90",
  green: "#C9F0CD",
  yellow: "#FFF7A1",
  blue: "#AACBFC",
  grey: "#e8e8e8",
  black: "#000000",
  white: "#FFFFFF"
};

const spacing = {
  xs: 2,
  s: 8,
  m: 12,
  l: 16,
  xl: 24
};

const fontSize = {
  s: 12,
  m: 16,
  l: 24
}

const colors = {
  background: palette.white,
  foreground: palette.black,
  primary: "#8B8A8A",
  primaryForeground: "#FFFFFF",
  secondary: palette.grey,
  success: palette.green,
  failure: palette.red,
  card: "rgba(52, 52, 52, 0.1)",
  border: {
    light: "#f7f7f7",
    medium: palette.grey,
    strong: "#cccccc"
  },
  accent: {
    blue: palette.blue,
    red: palette.red,
    green: palette.green,
    yellow: palette.yellow
  }
};

const radius = {
  s: 10,
  m: 16,
  l: 24,
  xl: 40
};

export const theme = {
  colors,
  spacing,
  radius,
  fontSize,
  style: {
    card: {
      backgroundColor: colors.background,
      paddingHorizontal: spacing.m,
      paddingVertical: spacing.s,
      borderRadius: radius.m,
      borderWidth: 1,
      borderColor: colors.border.medium,
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
      marginTop: spacing.l
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
