import React from "react";
import { StyleSheet, Text } from "react-native";

export default props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

const styles = StyleSheet.create({
  link: {
    color: "#1B95E0"
  }
});
