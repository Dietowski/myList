import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/index';
import Lists from './src/pages/list/list';

export default function App() {
  return (
      <Lists />
  );
}

const styles = StyleSheet.create({
});
