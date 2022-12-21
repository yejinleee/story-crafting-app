import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";

MainHeader.defaultProps = {
  icon: "add-circle"
};

export default function MainHeader({ title, icon, onAction }) {
  const iconSize = 32;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {!title ? (
          <Image
            source={require("../../../assets/logo_storycrafting_blue.png")}
            style={{ width: 48, height: 48 }}
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        <TouchableOpacity onPress={() => onAction && onAction()}>
          <Ionicons
            name={icon}
            color={theme.colors.accent.blue}
            size={iconSize}
          />
        </TouchableOpacity>
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
    marginHorizontal: theme.spacing.l,
    borderBottomWidth: 1,
    borderColor: theme.colors.border.strong,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    backgroundColor: theme.colors.border.light,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.radius.s,
    fontWeight: 500,
    fontSize: 16
  }
});
