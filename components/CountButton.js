import React from "react";
import { View, Button } from "react-native";

export default function CountButton({ message, amount, handlePress }) {
  return (
    <View>
      <Button
        disabled={!message || !amount}
        title="Посчитать количество SMS"
        onPress={handlePress}
      />
    </View>
  );
}
