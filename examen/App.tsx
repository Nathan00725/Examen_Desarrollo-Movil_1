import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Usuario_Provider } from './Context/Proviader';
import Transferencias from './Components/Trasnferencia/Transferencia';
import Historial from './Components/Historial/Historial';
import React from 'react';
import Inicio from './Components/Inicio/Inicio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Usuario_Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Transferencias" component={Transferencias} />
          <Stack.Screen name="Historial" component={Historial} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Usuario_Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
