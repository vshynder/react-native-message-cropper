import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import MessageInput from "./components/MessageInput";
import AmountBlock from "./components/AmountBlock";
import CountButton from "./components/CountButton";
import OtputBlock from "./components/OutputBlock";

export default function App() {
  const [inputMessage, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [smsAmount, setSmsAmount] = useState(null);

  const handleButtonPress = () => {
    let message = inputMessage.trim();
    if (message.length <= Number(amount)) return setSmsAmount(1);
    if (message.indexOf(" ") > Number(amount))
      return setSmsAmount("Неможливо відправити повідомлення");

    let cropped;
    const messages = [];
    for (let i = 0; i < message.length; i += Number(amount)) {
      if (cropped) {
        i = 0;
        i = messages.reduce((acc, el) => (acc += el.length), 0);
        if (messages.length > 1) i += messages.length - 1;
        if (messages.length === 1) i += 1;
      }

      if (message[i] == " ") i++;
      cropped = message.substr(i, Number(amount));

      if (message[i + cropped.length] !== " ") {
        if (cropped.indexOf(" ") === -1) {
          if (message[i + cropped.length]) {
            return setSmsAmount("Неможливо відправити повідомлення");
          }
        } else {
          cropped = cropped.substr(
            0,
            Math.min(cropped.length, cropped.lastIndexOf(" "))
          );
        }
      } else {
        cropped = cropped.trim();
      }
      if (cropped === "") continue;
      messages.push(cropped);
    }
    setSmsAmount(messages.length);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <MessageInput inputMessage={inputMessage} setMessage={setMessage} />
        <AmountBlock amount={amount} setAmount={setAmount} />
        <CountButton
          message={inputMessage}
          amount={amount}
          handlePress={handleButtonPress}
        />
        <OtputBlock smsAmount={smsAmount} />

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
