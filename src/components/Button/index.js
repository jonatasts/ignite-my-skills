import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

export const Button = ({ title, onPress }) => {
  return (
    <RectButton style={styles.button} activeOpacity={0.3} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
};
