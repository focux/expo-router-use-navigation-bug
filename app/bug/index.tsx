import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Something() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Title changed",
      headerStyle: { backgroundColor: "orangered" },
    });
  }, []);

  return (
    <View>
      <Text>Something</Text>
    </View>
  );
}
