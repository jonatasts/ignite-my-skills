import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

export const SkillCard = ({ skill }) => {
  return (
    <RectButton style={styles.buttonSkill}>
      <Text style={[styles.textSkill]}>{skill}</Text>
    </RectButton>
  );
};
