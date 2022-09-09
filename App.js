import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/stackNav';
import { Service } from './infrastructure/screens/Service';
import { Profile } from './infrastructure/screens/Profile';
export default function App() {

  return (
     //<Profile/>
    <Service />
//    <NavigationContainer>
//     <StackNavigation/>
//  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});