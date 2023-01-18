import { Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import GridList from "../../elements/layout/GridList";
import MainHeader from "../../elements/layout/MainHeader";
import Slider from "../../elements/layout/Slider";
import Page from "../Page";
import ScrollPage from "../ScrollPage";

export default function Rewards({navigation}) {
  return (
    <ScrollPage header={<MainHeader onBackButton={navigation.goBack} title="Rewards"/>}>
      <Slider value={2} outOf={5}/>
      <Text style={theme.textVariants.title}>Acquired badges</Text>
      <GridList>{[...Array(16)].map((_, i) => i)}</GridList>
      <Text style={theme.textVariants.title}>Unacquired badges</Text>
      <GridList>{[...Array(16)].map((_, i) => i)}</GridList>
    </ScrollPage>
  );
}
