import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalAuthentication } from '../hooks/useLocalAuthentication';

const FingerprintScreen = () => {
  const {
    authData,
    authLevel,
    authType,
    hasAuthHardward,
    getAuthenticateAsync,
    scanAuthLevel,
    scanAuthType,
    scanAuthHardward,
  } = useLocalAuthentication();

  return (
    <View style={style.container}>
      <Button title='Get AuthenticateAsync' onPress={getAuthenticateAsync} />
      <Text>{JSON.stringify(authData, null, 2)}</Text>

      <Button title='Scan AuthLevel' onPress={scanAuthLevel} />
      <Text>{JSON.stringify(authLevel, null, 2)}</Text>

      <Button title='Scan AuthType' onPress={scanAuthType} />
      <Text>{JSON.stringify(authType, null, 2)}</Text>

      <Button title='Scan Hardward' onPress={scanAuthHardward} />
      <Text>{JSON.stringify(hasAuthHardward, null, 2)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FingerprintScreen;
