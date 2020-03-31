import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, Button } from 'react-native';
 
 
export default function Header({}) {
 
 
    return (
       
        <View style={style.header}>
             <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
           <MaterialIcons name='menu' size={23}  style={style.icon}  onPress={() => navigation.openDrawer()}/>
            <View>
                <Text style={style.headerText}>Loong Jai</Text>
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
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left: 16
    }
});