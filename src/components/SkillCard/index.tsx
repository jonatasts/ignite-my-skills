import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { SkillCardProps } from "./types";

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <RectButton style={styles.buttonSkill} {...rest}>
      <Text style={[styles.textSkill]}>{skill}</Text>
    </RectButton>
  );
};
