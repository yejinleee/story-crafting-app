import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../../style/theme.style";
import { useState } from "react";

export default function ChatList({ elements }) {
  const [selected, setSelected] = useState([]);

  const Item = ({ item }) => (
    <View
        style={{
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'rgba(0,0,0,0.1)',
            textAlign: 'center',
            width: '33%',
            // height: 'auto',
            paddingVertical: 3,
            marginVertical: 5,
            backgroundColor: selected.includes(item) ? palette.green : "",
        }}>
      <TouchableOpacity style={{width: "100%", height: "100%", justifyContent:'center'}} onPress={()=> setSelected((prev) => [...prev, item])}>
        {elements[item]}
      </TouchableOpacity>
    </View>
  );
  return (
    <View
    style={{
        display: 'flex', justifyContent: 'space-between'
    }}>
        <FlatList
          style={{ width: "100%" }}
          numColumns={3}
          data={elements.map((_, i) => i)}
          renderItem={Item}
        />
    </View>
  );
}
