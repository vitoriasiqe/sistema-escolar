import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Eventos() {
  return (
    <View style={styles.container}>
    <View style={styles.fixedHeader}>
    <View style={styles.header}>
    <Text style={styles.username}>Marcio Cézar</Text>
    <Text style={styles.eventostexto}> Eventos escolares</Text>
    </View>

    <View style={styles.iconContainer}>
        <DrawerToggleButton tintColor="white" />
   </View>
      </View>


      <ScrollView style={styles.scrollContainer}>
       
        <View style={styles.eventSection}>
        <Image source={require('./img/conselho.jpg')} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Reunião de Pais</Text>
        <Text style={styles.eventDate}>Data: 12 de Dezembro, 18:00</Text>
        <Text style={styles.eventDescription}>
          Encontro para discutir o desempenho acadêmico dos alunos e os planos para o próximo semestre.
        </Text>
      </View>

      <View style={styles.eventSection}>
        <Image source={require('./img/junina.jpg')} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Festa Junina</Text>
        <Text style={styles.eventDate}>Data: 24 de Junho, 19:00</Text>
        <Text style={styles.eventDescription}>
          Celebração típica com quadrilha, comidas tradicionais e muita diversão para toda a família.
        </Text>
      </View>

      <View style={styles.eventSection}>
        <Image source={require('./img/exposicao.jpg')} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Exposição de Ciências</Text>
        <Text style={styles.eventDate}>Data: 5 de Outubro, 14:00</Text>
        <Text style={styles.eventDescription}>
          Exibição de projetos científicos criados pelos alunos, com foco em sustentabilidade e inovação.
        </Text>
      </View>

      <View style={styles.eventSection}>
        <Image source={require('./img/corrida.jpg')} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Corrida de Rua</Text>
        <Text style={styles.eventDate}>Data: 8 de Novembro, 8:00</Text>
        <Text style={styles.eventDescription}>
          Evento esportivo envolvendo alunos e professores, promovendo a saúde e o espírito de equipe.
        </Text>
      </View>

      <View style={styles.eventSection}>
        <Image source={require('./img/elteatro.jpg')} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Apresentação de Teatro</Text>
        <Text style={styles.eventDate}>Data: 18 de Outubro, 20:00</Text>
        <Text style={styles.eventDescription}>
          Espetáculo de teatro preparado pelos alunos, com uma história inspiradora e atuações emocionantes.
        </Text>
      </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e97d1",
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#4e97d1",
    paddingTop: 43,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 100, // Adicione um valor que acomode o tamanho do header fixo
    paddingHorizontal: 24,
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
  eventSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  eventDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007BFF",
    marginVertical: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: "#555",
  },
  eventostexto: {
    fontSize: 10,
    color: "white"
  }
});
