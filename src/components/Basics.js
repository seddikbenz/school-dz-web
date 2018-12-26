import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export const UiButton = ({ title, onPress, style, ...rest }) => (
  <TouchableOpacity
    {...rest}
    onPress={onPress}
    style={[styles.uiButton, style]}
  >
    <Text style={styles.uiTextButton}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  uiButton: {
    backgroundColor: "#2196f3",
    width: 80,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  uiTextButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});
