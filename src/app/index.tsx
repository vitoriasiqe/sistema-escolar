import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Index() {
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const message = "Você está no Studies, o aplicativo que vai te ajudar a gerenciar sua vida escolar.";

  useEffect(() => {
    if (typingIndex < message.length) {
    const timeout = setTimeout(() => {
    setTypingText(typingText + message.charAt(typingIndex));
    setTypingIndex(typingIndex + 1);
    }, 50); 
    return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  return (
    <View style={styles.container}>
    <View style={styles.header}>
   <Image source={require("./img/marcio.png")} style={styles.img} />
    <View style={styles.user}>
    <Text style={styles.hi}> Olá, </Text>
    <Text style={styles.username}> Marcio Cézar </Text>
    </View>
  </View>
    <View style={styles.iconContainer}>
    <DrawerToggleButton tintColor="white" />
    </View>
    <Text style={styles.welcome}>{typingText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#4e97d1",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 10,
    marginBottom: 20,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  user: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  hi: {
    fontSize: 14,
    color: "white",
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 32,
    right: 24,
  },
  welcome: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
