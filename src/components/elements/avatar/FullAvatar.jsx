import { useMemo } from "react";
import { Image } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../layout/Card";
import useAvatar from "../../../hooks/useAvatar";

FullAvatar.defaultProps = {
  hat: "default",
  eyewear: "default",
  face: "default",
  body: "default",
  height: 128,
  width: 128
}

export default function FullAvatar({hat, eyewear, face, body, height, width, ...props}) {
  const {hats, eyewears, faces, bodies} = useAvatar();


  return (
    <Card
      style={{
        borderWidth: 2,
        borderRadius: theme.radius.s,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: height + height / 2,
        width: width,
        borderColor: "transparent",
        position: "relative"
      }}
      {...props}
    >
      <Image style={{height, width: "100%", position: "absolute"}} source={require("../../../assets/avatar/default-head.png")}></Image>
      <Image style={{height: height / 2, width: "100%", position: "absolute", marginTop: height - height * 0.18}} source={require("../../../assets/avatar/default-body.png")}></Image>
      <Image style={{height: height / 2, width: "100%", position: "absolute", marginTop: height - height * 0.18}} source={bodies[body ?? "default"] ?? bodies.default}></Image>
      <Image style={{height, width: "100%", position: "absolute"}} source={hats[hat ?? "default"] ?? hats.default}/>
      <Image style={{height, width: "100%", position: "absolute"}} source={faces[face ?? "default"] ?? faces.default}></Image>
      <Image style={{height, width: "100%", position: "absolute"}} source={eyewears[eyewear ?? "default"] ?? eyewears.default}></Image>
    </Card>
  );
}
