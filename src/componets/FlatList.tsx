import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import menuItems from '../config/menuItems';
import { MenuItemProps } from '../interfaces/appInterfaces';
import { GlobalTheme } from '../theme/Theme';
import FlatListItem from './FlatListItem';

const Flatlist = () => {
  const renderItem = ({ item }: { item: MenuItemProps }) => {
    return (
      <FlatListItem
        title={item.title}
        icon={item.icon}
        screenName={item.screenName}
      />
    );
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
        data={menuItems}
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
