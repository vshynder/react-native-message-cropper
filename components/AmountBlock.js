import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function AmountBlock({ amount, setAmount }) {
  return (
    <View style={styles.amountBlock}>
      <View style={styles.amountContainer}>
        <View style={styles.amountInput}>
          <TextInput
            style={styles.amountTextInput}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.amountText}>
          <Text>Кількість символів в смс</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  amountBlock: {
    width: "90%",
  },
  amountInput: {
    width: 40,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  amountTextInput: {
    fontSize: 25,
  },
  amountText: {
    alignItems: "center",
    justifyContent: "center",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
