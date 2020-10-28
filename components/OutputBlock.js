import React from "react";
import { View, Text } from "react-native";

export default function OutputBlock({ smsAmount }) {
  return (
    <View style={smsAmount ? { opacity: 1 } : { opacity: 0 }}>
      <Text>Потрібно смс: {smsAmount}</Text>
    </View>
  );
}
