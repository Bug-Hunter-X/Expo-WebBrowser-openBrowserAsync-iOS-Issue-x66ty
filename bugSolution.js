import * as Linking from 'expo-linking';

const handlePress = async () => {
  let result = await Linking.openURL('https://www.example.com');
  console.log('Result: ', result);
};