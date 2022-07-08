import React from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";

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
    </View>
  );
};
