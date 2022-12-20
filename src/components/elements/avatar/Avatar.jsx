import { theme } from "../../../style/theme.style";
import Card from "../layout/Card";

export default function Avatar() {
  return (
    <Card
      style={{
        borderWidth: 2,
        borderColor: theme.colors.border.strong,
        backgroundColor: "#f6f6f7",
        borderRadius: theme.radius.s,
        paddingVertical: theme.spacing.l,
        paddingHorizontal: theme.spacing.l
      }}
    >
      {/* Will display the small head representation of an avatar */}
    </Card>
  );
}
