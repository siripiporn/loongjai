import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about';
 

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name='About' component={About} options={{ title: 'about' }} />
      </Stack.Navigator>
 
  )
}