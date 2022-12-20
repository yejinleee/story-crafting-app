import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";
import Card from "../layout/Card";
import Avatar from "../avatar/Avatar";

export default function Post() {
  return (
    <Card style={[styles.container]}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.m
        }}
      >
        <View style={styles.info}>
          <Avatar />
          author
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
      <Card shadow={true} round={true} style={[styles.comments]}>
        <View style={styles.commentText}>
          <Text style={{ fontSize: theme.fontSize.s }}>write a comment</Text>
        </View>
        <TouchableOpacity style={styles.commentButton}>
          <Ionicons
            name="send-outline"
            color={theme.colors.accent.blue}
            size={theme.fontSize.s}
          />
        </TouchableOpacity>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.m,
    paddingHorizontal: theme.spacing.l
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
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  commentText: {},
  commentButton: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  }
});
