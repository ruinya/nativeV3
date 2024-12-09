import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>О Себе</Text>
      <Text style={styles.content}>Салют! Меня зовут Кисель!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#333',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    fontSize: 20,
    color: "#733",
  },
});

export default AboutMeScreen;
