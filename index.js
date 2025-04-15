import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela01 from './screens/Tela01';
import Tela02 from './screens/Tela02';
import Tela03 from './screens/Tela03';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Início">

        <Stack.Screen name="Início" component={Tela01}/>
        <Stack.Screen name="Formulário" component={Tela02}/>
        <Stack.Screen name="Resultado" component={Tela03}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}
