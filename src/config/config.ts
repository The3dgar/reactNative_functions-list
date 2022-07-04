import Constants from 'expo-constants';
import { AppConfig } from '../../app.config';

const { API_TOKEN, API_URL } = Constants.manifest?.extra as AppConfig;

const appConfig = {
  apiUrl: API_URL,
  apiToken: API_TOKEN,
};

export default appConfig;
