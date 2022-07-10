import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Button } from "../../components/Button";

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

      <Button title={"Add"} onPress={handleAddNewSkill} />

      <Text style={[styles.title, styles.spacing]}>My Skills</Text>

      {mySkills.map((skill) => (
        <RectButton key={skill} style={styles.buttonSkill}>
          <Text style={[styles.textSkill]}>{skill}</Text>
        </RectButton>
      ))}
    </View>
  );
};
