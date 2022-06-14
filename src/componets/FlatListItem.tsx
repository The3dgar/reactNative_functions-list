import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItemProps } from '../interfaces/appInterfaces';

const FlatListItem = ({ title, icon, screenName }: MenuItemProps) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate(screenName as any)}>
      <View style={style.item}>
        <Ionicons name={icon} size={18} color='black' />
        <Text style={style.text}>{title}</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name='arrow-forward' size={18} color='black' />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#a0b0b9',
    alignItems: 'center',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default FlatListItem;
