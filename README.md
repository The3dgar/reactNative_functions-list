## About this repo
    this repository is an interesting mobile features collections 

#### Local authentication

    - Dependencies:
        yarn add expo-local-authentication
    
    - using in hook or other file:
        import * as LocalAuthentication from 'expo-local-authentication';

#### Enviroments vars:

    - Dependencies: 
        yarn add dotenv react-native-dotenv expo-constants

    - Create .env file in root project
        API_URL=https://api.example.org
        API_TOKEN=abc123

    - Ignore .env file in .gitignore

    - Create or update a file app.config.ts that export enviroments vars and the interface

    - create a config.ts file that export all enviroments vars to other files
        
        import Constants from 'expo-constants';
        import { AppConfig } from '../../app.config';
        
        const { API_TOKEN, API_URL } = Constants.manifest?.extra as AppConfig;


