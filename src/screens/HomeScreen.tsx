import { View } from 'react-native';
import Flatlist from '../componets/FlatList';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Flatlist/>
    </View>
  );
}

export default HomeScreen;