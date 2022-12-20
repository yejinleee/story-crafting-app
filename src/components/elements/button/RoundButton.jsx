import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";

export default function RoundButton({ title, children, ...props }) {
  return (
    <View {...{ style: styles.round, ...props }}>
      {title && (
        <Text
          style={{
            fontWeight: 500
          }}
        >
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  round: {
    borderRadius: 1000,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.m,
    height: "100%",
    aspectRatio: "1 / 1",
    textAlign: "center",
    justifyContent: "center"
  }
});
