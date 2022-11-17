import { View } from "react-native";

export default function Divider(props) {
  return (
    <View
      {...props}
      style={{
        borderBottomColor: "black",
        borderBottomWidth: "1px",
        // marginVertical: "1em"
      }}
    ></View>
  );
}
