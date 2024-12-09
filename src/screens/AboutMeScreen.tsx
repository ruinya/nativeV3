import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>О Себе</Text>
      <Text style={styles.content}>Хеллоу Зэ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#deebf0',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    fontSize: 20,
    color: "#34303b",
  },
});

export default AboutMeScreen;
