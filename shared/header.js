import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, Image, } from 'react-native';
import { globalStyles } from '../styles/stylesGlobal';

 
 
export default function Header({navigation}) {
 
    return (
       
        <View style={style.header}>
        
           <MaterialIcons name='menu' size={23}  style={globalStyles.icon} onPress={() => navigation.openDrawer()}  />
            <View style={globalStyles.headerTitle}>
            <Image style={globalStyles.logo} source={require('../assets/Images/logo-longjai.png')} />
                <Text style={globalStyles.header}>Loong Jai</Text>
            </View>
        </View>
        
    );
}
 
const style = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
     
});