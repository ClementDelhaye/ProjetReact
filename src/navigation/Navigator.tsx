import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { PokedexScreen } from "../screens/PokedexScreen";
import { InfosScreen } from "../screens/InfosScreen";
import { Routes } from "./Route";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Group>
      <Stack.Screen name={Routes.POKEDEX_SCREEN} component={PokedexScreen} />
      <Stack.Screen name={Routes.INFOS_SCREEN} component={InfosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;