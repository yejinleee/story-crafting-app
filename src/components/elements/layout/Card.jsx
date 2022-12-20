import { StyleSheet, View } from "react-native";
import { theme } from "../../../style/theme.style";

Card.defaultProps = {
  shadow: false,
  round: false
};

export default function Card({ style, shadow, children, round, ...props }) {
  return (
    <View {...props} style={[theme.style.card, styles.flex, shadow ? styles.shadow : {}, round ? {borderRadius: 1000} : {}, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    marginRight: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s
  }
});
