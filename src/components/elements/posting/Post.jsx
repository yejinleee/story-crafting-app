import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";

export default function Post() {
  return (
    <View style={[theme.style.card, styles.container]}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.m
        }}
      >
        <View style={styles.info}>
          <View style={styles.avatar}></View> author
        </View>
        <View style={[styles.content]}></View>
        <View style={styles.textContent}>
          <Text style={{ display: "block" }}>
            <Ionicons
              name="heart-circle-outline"
              color={theme.colors.accent.red}
              size={16}
            />
            {" 3 likes"}
          </Text>
          <Text style={{ display: "block" }}>Description of the post</Text>
        </View>
      </View>
      <View style={[theme.style.card, styles.comments]}>
        <View style={styles.commentText}>
          <Text style={{ flex: 1 }}>write a comment</Text>
        </View>
        <TouchableOpacity style={styles.commentButton}>
          <Ionicons name="send-outline" color={theme.colors.accent.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    marginVertical: theme.spacing.s,
    paddingVertical: theme
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.m
  },
  avatar: {
    borderRadius: theme.radius.s,
    backgroundColor: "#f6f6f7",
    borderColor: theme.colors.border.strong,
    borderWidth: 2,
    padding: theme.spacing.l,
  },
  content: {
    width: "100%",
    aspectRatio: 1 / 1,
    backgroundColor: "#f6f6f7",
    borderRadius: theme.radius.m
  },
  textContent: {
    paddingHorizontal: theme.spacing.l
  },
  comments: {
    padding: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  commentText: {
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m
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
