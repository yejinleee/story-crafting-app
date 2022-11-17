import { Button } from "react-native";
import { theme } from "../../../style/theme.style";

export default function MainButton(props) {
  return (
    <Button
      {...props}
      style={{
        borderRadius: theme.radius.m
      }}
    ></Button>
  );
}
