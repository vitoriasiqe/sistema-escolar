import { Text, View, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

const boletimData = [
  { subject: "Matemática", grade: 9 },
  { subject: "Português", grade: 8 },
  { subject: "História", grade: 7 },
  { subject: "Geografia", grade: 8 },
  { subject: "Ciências", grade: 10 }
];

export default function Boletim() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Marcio Cézar</Text>
        <Text style={styles.eventostexto}>Boletim</Text>
      </View>
      <View style={styles.iconContainer}>
        <DrawerToggleButton tintColor="white" />
      </View>
      <View style={styles.boletimContainer}>
        {boletimData.map((item, index) => (
          <View key={index} style={styles.boletimItem}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.grade}>{item.grade}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 43,
    backgroundColor: "#4e97d1",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", 
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginRight: 10, 
  },
  iconContainer: {
    position: "absolute",
    top: 32,
    right: 24,
  },
  eventostexto: {
    fontSize: 10,
    color: "white",
  },
  boletimContainer: {
    marginTop: 20,
  },
  boletimItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  subject: {
    fontSize: 16,
    color: "white",
  },
  grade: {
    fontSize: 16,
    color: "white",
  },
});
