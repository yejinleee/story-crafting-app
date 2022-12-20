import { Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import GridList from "../../elements/layout/GridList";
import Slider from "../../elements/layout/Slider";
import Page from "../Page";
import ScrollPage from "../ScrollPage";

export default function Rewards() {
  return (
    <ScrollPage>
      <Slider value={2} outOf={5}/>
      <Text style={theme.textVariants.title}>Workshops</Text>
      <GridList>{[...Array(16)].map((_, i) => i)}</GridList>
      <Text style={theme.textVariants.title}>General rewards</Text>
      <GridList>{[...Array(16)].map((_, i) => i)}</GridList>
    </ScrollPage>
  );
}
