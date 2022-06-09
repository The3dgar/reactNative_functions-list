import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fingerprint from '../screens/Fingerprint';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Fingerprint' component={Fingerprint} />
    </Stack.Navigator>
  );
};
