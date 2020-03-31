import * as React from 'react';
import HomeSlack from '../routes/homeSlack';
import AboutSlack from '../routes/aboutSlack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeSlack} />
        <Drawer.Screen name="About Us" component={AboutSlack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}