import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";

export default function Post() {
  return (
    <View style={[theme.style.card, styles.container]}>
      <View style={{display: "flex", flexDirection: "column", gap: theme.spacing.s}}>
      <View style={styles.info}>author</View>
        <View style={[styles.content, theme.style.card]}></View>
        <Text style={{display: "block"}}>
          <Ionicons
            name="heart-circle-outline"
            color={theme.colors.primary}
          />
          {" 3 likes"}
        </Text>
      </View>
      <View style={[theme.style.card, styles.comments]}>
        <View style={styles.commentText}>
            <Text style={{flex: 1}}>write a comment</Text>
        </View>
        <TouchableOpacity style={styles.commentButton}>
        <Ionicons
            name="send-outline"
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing.s,
    gap: theme.spacing.m
  },
  info: {},
  content: {
    width: "100%",
    aspectRatio: 1 / 1
  },
  comments: {
    padding: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  commentText: {
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
  },
  commentButton: {
    paddingHorizontal: theme.spacing.m,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.l
  }
});
