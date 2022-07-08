import React from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Text style={styles.title}>Welcome, Jhon</Text>

      <TextInput
        style={styles.input}
        placeholder={"New skill"}
        placeholderTextColor={"#555"}
      />

      <RectButton style={styles.button} activeOpacity={0.3}>
        <Text style={styles.buttonText}>Add</Text>
      </RectButton>

      <Text style={[styles.title, styles.spacing]}>My Skills</Text>
    </View>
  );
};
