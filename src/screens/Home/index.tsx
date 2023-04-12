import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TextInput, FlatList } from "react-native";

import { Button } from "../../components/Button";
import { SkillCard } from "../../components/SkillCard";

import styles from "./styles";
import { SkillData } from "./types";

export const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldSkills) => [...oldSkills, data]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills((oldsSkills) => oldsSkills.filter((skill) => skill.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours() - 3;

    switch (true) {
      case currentHour < 12:
        setGreeting("Good morning");
        break;

      case currentHour < 18:
        setGreeting("Good affternoon");
        break;

      default:
        setGreeting("Good night");
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Text testID="welcome" style={styles.title}>
        Welcome, Jhon
      </Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        testID="new-skill-input"
        style={styles.input}
        placeholder={"New skill"}
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <Button
        testID="new-skill-button"
        title={"Add"}
        onPress={handleAddNewSkill}
      />

      {mySkills.length > 0 && (
        <Text style={[styles.title, styles.spacing]}>My Skills</Text>
      )}

      {mySkills.length > 0 && (
        <FlatList
          testID="flat-list-skills"
          data={mySkills}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="never"
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SkillCard
              testID={item.name}
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};
