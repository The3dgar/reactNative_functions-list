import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { MenuItemProps } from '../interfaces/appInterfaces';
import { GlobalTheme } from '../theme/Theme';
import FlatListItem from './FlatListItem';

const DATA: MenuItemProps[] = [
  {
    title: 'Fingerprint',
    icon: 'finger-print',
    component: 'Fingerprint',
  },
  {
    title: 'Fingerprint2',
    icon: 'finger-print',
    component: 'FingerprintScreen',
  },
];

const Flatlist = () => {
  const renderItem = ({ item }: { item: MenuItemProps}) => {
    return <FlatListItem title={item.title} icon={item.icon} component={item.component} />;
  };

  const renderListHeader = () => {
    return (
      <View>
        <Text style={GlobalTheme.title}>Funcionalidades a probar</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  separator: {
    borderTopWidth: 2,
    opacity: 0.2,
  },
});

export default Flatlist;
