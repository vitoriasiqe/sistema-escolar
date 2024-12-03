import { Text, View, StyleSheet } from "react-native"; 
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

export default function Contatos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Marcio Cézar</Text>
        <Text style={styles.eventostexto}> Contatos </Text>
      </View>
{/* --------- */}

      <View style={styles.iconContainer}>
      <DrawerToggleButton tintColor="white" />
      </View>

      <Text style={styles.contatoText}>Fale conosco</Text>

      <View style={styles.contactSection}>
      <View style={styles.contactItem}>
      <Text style={styles.contactLabel}>Telefone</Text>
      <Text>+55 11 90000-0000</Text>
      <Text>Horário: 9h às 16h</Text>
      <Feather name="phone" size={20} color="#4e97d1" style={styles.icon} />
      </View>

      <View style={styles.contactItem}>
      <Text style={styles.contactLabel}>Email</Text>
      <Text>contato@obamail.com</Text>
      <Text> Horário: 24h / dia</Text>
      <Feather name="mail" size={20} color="#4e97d1" style={styles.icon} />
          
      </View>
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
    gap: 7,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 10,
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
  contatoText: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center", 
  },
  contactSection: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 40, 
    flexWrap: 'wrap', 
  },
  contactItem: {
    marginHorizontal: 20, 
    padding: 20, 
    backgroundColor: "#ffffff", 
    borderRadius: 10, 
    width: 180, 
    alignItems: "center", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
    flexWrap: 'wrap', 
  },
  contactLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#4e97d1", 
    marginBottom: 10, 
  },
  icon: {
    marginTop: 10, 
  },
  eventostexto: {
    fontSize: 10,
    color: "white"
  }
});
