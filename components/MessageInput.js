import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function MessageInput({ setMessage, inputMessage }) {
  return (
    <View style={styles.textInputCont}>
      <TextInput
        style={styles.textInput}
        placeholder="Ваше повідомлення"
        value={inputMessage}
        onChangeText={(text) => setMessage(text)}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputCont: {
    borderColor: "#000000",
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 15,
    width: "90%",
  },
  textInput: {
    width: "100%",
  },
});
