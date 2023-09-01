import Comanda from "./app/comanda";
import Login from "./app/login";
import Produtos from "./app/produtos";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Comanda" component={Comanda} />
          <Stack.Screen name="Produtos" component={Produtos} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

