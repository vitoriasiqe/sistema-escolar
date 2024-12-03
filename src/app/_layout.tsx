import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="index" options={{ drawerLabel: "Home", drawerIcon: ({ color }) => <Feather name="home" size={15} color={color} /> }} />
        <Drawer.Screen name="Eventos" options={{ drawerLabel: "Eventos", drawerIcon: ({ color }) => <Feather name="bell" size={15} color={color} /> }} />
        <Drawer.Screen name="Contatos" options={{ drawerLabel: "Contatos", drawerIcon: ({ color }) => <Feather name="phone" size={15} color={color} /> }} />
        <Drawer.Screen name="Calendario" options={{ drawerLabel: "Calendario", drawerIcon: ({ color }) => <Feather name="calendar" size={15} color={color} /> }} />
        <Drawer.Screen name="Boletim" options={{ drawerLabel: "Boletim", drawerIcon: ({ color }) => <Feather name="file-text" size={15} color={color} /> }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
