import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

export const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills((oldSkills) => [...oldSkills, newSkill]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Text style={styles.title}>Welcome, Jhon</Text>

      <TextInput
        style={styles.input}
        placeholder={"New skill"}
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <RectButton
        style={styles.button}
        activeOpacity={0.3}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </RectButton>

      <Text style={[styles.title, styles.spacing]}>My Skills</Text>

      {mySkills.map((skill) => (
        <RectButton key={skill} style={styles.buttonSkill}>
          <Text style={[styles.textSkill]}>{skill}</Text>
        </RectButton>
      ))}
    </View>
  );
};
