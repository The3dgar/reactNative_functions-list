import { View, Text } from 'react-native';
import appConfig from '../config/config';
import { GlobalTheme } from '../theme/Theme';

const EnviromentsScreen = () => {
  return (
    <View style={GlobalTheme.container}>
      <Text>{JSON.stringify(appConfig, null, 4)}</Text>
    </View>
  );
};

export default EnviromentsScreen;
