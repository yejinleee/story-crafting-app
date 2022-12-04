import { View } from "react-native";
import { theme } from "../../../style/theme.style";

export default function Divider(props) {
  return (
    <View
      {...props}
      style={{
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: "1px",
        marginVertical: theme.spacing.l
      }}
    ></View>
  );
}
