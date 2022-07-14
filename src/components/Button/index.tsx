import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ title, onPress, ...rest }: ButtonProps) => {
  return (
    <RectButton
      style={styles.button}
      activeOpacity={0.3}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
};
