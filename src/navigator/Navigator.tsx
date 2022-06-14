import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnviromentsScreen from '../screens/EnviromentsScreen';
import FingerprintScreen from '../screens/FingerprintScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Fingerprint' component={FingerprintScreen} />
      <Stack.Screen name='Enviroments' component={EnviromentsScreen} />
    </Stack.Navigator>
  );
};
