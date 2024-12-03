import { Text, View, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

// npm install react-calendar
// import Calendar from 'react-calendar'
// precisa configurar manualmente se der pau / p traduzir (LocaleConfig)
export default function Calendario() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Marcio Cézar</Text>
        <Text style={styles.eventostexto}>Calendário</Text>
      </View>
      <View style={styles.iconContainer}>
        <DrawerToggleButton tintColor="white" />
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day: DayProps) => {
            console.log("selected day", day);
          }}
          monthFormat={'MM yyyy'}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={true}
          minDate={'2022-05-10'}
          maxDate={'2023-05-30'}
          enableSwipeMonths={true}
          markedDates={{
            '2023-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2023-05-17': {marked: true},
            '2023-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2023-05-19': {disabled: true, disableTouchEvent: true}
          }}
        />
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
    width: "100%",
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
  eventostexto: {
    fontSize: 10,
    color: "white",
  },
  calendarContainer: {
    marginTop: 20,
  },
});
