import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";


export default function ChatHeader({ onBackButton, title, onAction }) {
  const iconSize = 32;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          {onBackButton && <>
            <TouchableOpacity onPress={onBackButton}>
              <Ionicons
                name={"chevron-back"}
                color={theme.colors.foreground}
                size={iconSize}
              />
            </TouchableOpacity>
            <View>
              <Image source={require("../../../assets/logo_storycrafting_blue.png")}
                style={{ width: 38, height: 38 }} />
            </View>
          </>}
          <Text style={!onBackButton ? [styles.title, {backgroundColor: theme.colors.border.light}] : [styles.title]}>{title}</Text>
        </View>
       {!onBackButton &&  <TouchableOpacity onPress={() => onAction && onAction()}>
          <Image source={require('../../../assets/headerIcon/chatPlus.png')}
            style={{width: 28, height: 28}} />
        </TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 65,
    backgroundColor: theme.colors.background
  },
  header: {
    height: "100%",
    marginHorizontal: theme.spacing.m,
    borderBottomWidth: 1,
    borderColor: theme.colors.border.strong,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.radius.s,
    fontWeight: 500,
    fontSize: 16
  }
});
