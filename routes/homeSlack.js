import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home';
import Headerstyle from '../shared/header';
import ReviewDetail from '../screens/reviewDetail';
 

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
   
      <Stack.Navigator  initialRouteName="Home" >
        <Stack.Screen name='Home' component={Home}  options={{ headerTitle: () => <Headerstyle />}} />
        <Stack.Screen name='ReviewDetail' component={ReviewDetail} options={{ title: 'Review Detail' }} />
     </Stack.Navigator>
 
  )
}