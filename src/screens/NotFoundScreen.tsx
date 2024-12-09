import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Не найдено</Text>
      <Text style={styles.content}>Информации не найдено</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '##ffcba2',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    color: "#deebf0",
  },
});

export default NotFoundScreen;
