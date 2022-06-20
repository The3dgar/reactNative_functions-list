## About this repo
    this repository is an interesting mobile features collections 

#### Local authentication

    - Dependencies:
        yarn add expo-local-authentication
    
    - using in hook or other file:
        import * as LocalAuthentication from 'expo-local-authentication';

#### Enviroments vars:

    - Dependencies: 
        yarn add react-native-dotenv

    - Dev dependencies:
        yarn add -D @types/react-native-dotenv

    - Babel config plugin:
        [
          'module:react-native-dotenv',
          {
            moduleName: 'react-native-dotenv',
          },
        ]

    - Create .env file in root project
        API_URL=https://api.example.org
        API_TOKEN=abc123

    - Ignore .env file in .gitignore

    - Create a file config.js that export vars 
        import EnviromentsVars from 'react-native-dotenv';
        const { API_URL, API_TOKEN } = EnviromentsVars;


