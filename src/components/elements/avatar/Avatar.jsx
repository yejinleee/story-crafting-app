import { useMemo } from "react";
import { Image } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../layout/Card";
import useAvatar from "../../../hooks/useAvatar";

Avatar.defaultProps = {
  hat: "default",
  eyewear: "default",
  face: "default",
}

export default function Avatar({hat, eyewear, face, ...props}) {
  const {hats, eyewears, faces} = useAvatar();

  return (
    <Card
      style={{
        borderWidth: 2,
        borderColor: theme.colors.border.strong,
        backgroundColor: "#f6f6f7",
        borderRadius: theme.radius.s,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 42,
        width: 42,
        position: "relative"
      }}
      {...props}
    >
      <Image style={{height: "100%", width: "100%", position: "absolute"}} source={require("../../../assets/avatar/default-head.png")}></Image>
      <Image style={{height: "100%", width: "100%", position: "absolute"}} source={hats[hat ?? "default"] ?? hats.default}/>
      <Image style={{height: "100%", width: "100%", position: "absolute"}} source={faces[face ?? "default"] ?? faces.default}></Image>
      <Image style={{height: "100%", width: "100%", position: "absolute"}} source={eyewears[eyewear ?? "default"] ?? eyewears.default}></Image>
    </Card>
  );
}
