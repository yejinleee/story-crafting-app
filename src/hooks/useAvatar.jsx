import { Image, View } from "react-native";

export default function useAvatar() {
  const hats = {
    default: require("../assets/avatar/hat/default.png"),
    "beanie-red": require("../assets/avatar/hat/beanie-red.png"),
    "beanie-blue": require("../assets/avatar/hat/beanie-blue.png"),
    "beanie-yellow": require("../assets/avatar/hat/beanie-yellow.png"),
    "beanie-green": require("../assets/avatar/hat/beanie-green.png")
  };

  const eyewears = {
    default: require("../assets/avatar/eyewear/default.png"),
    "stars": require("../assets/avatar/eyewear/glasses-star.png"),
    "shades-stars": require("../assets/avatar/eyewear/shades-star.png"),
    "round": require("../assets/avatar/eyewear/round.png"),
    "programmer-art-1": require("../assets/avatar/eyewear/shades-weird.png")
  };

  const faces = {
    default: require("../assets/avatar/face/default.png"),
    "o": require("../assets/avatar/face/o.png"),
    "uu": require("../assets/avatar/face/uu.png"),
    "w": require("../assets/avatar/face/w.png"),
    "u": require("../assets/avatar/face/u.png")
  };

  const bodies = {
    default: require("../assets/avatar/body/default.png"),
    "shirt-green": require("../assets/avatar/body/shirt-green.png"),
    "shirt-yellow": require("../assets/avatar/body/shirt-yellow.png"),
    "shirt-red": require("../assets/avatar/body/shirt-red.png"),
    "shirt-blue": require("../assets/avatar/body/shirt-blue.png"),
  };

  return {
    hats,
    eyewears,
    faces,
    bodies
  };
}