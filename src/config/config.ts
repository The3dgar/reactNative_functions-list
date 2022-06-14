import EnviromentsVars from 'react-native-dotenv';
const { API_URL, API_TOKEN } = EnviromentsVars

const appConfig = {
  apiUrl: API_URL,
  apiToken: API_TOKEN,
};

export default appConfig;
