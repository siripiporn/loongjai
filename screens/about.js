import React from 'react';
import { View,Text, Image, StyleSheet} from 'react-native';
import { globalStyles } from '../styles/stylesGlobal';

export default function About (){
    return(
        <View style={globalStyles.container}>
            <Image style={globalStyles.logo} source={require('../assets/Images/logo-longjai.png')} ></Image>
            <Text>เว็บลุงใจ ดอทคอม เป็นเว็บที่คอยดูแลผู้สูงอายุ สร้างความสุขให้สังคมผู้สูงวัย การแลกเปลี่ยนเรียนรู้และการเพิ่มคุณภาพชีวิตที่ดีให้กับผู้สูงอายุได้มีชีวิตและการใช้ชีวิตบนโลกใบนี้ได้อย่างมีความสุข</Text>
            
        </View>
    )
}

 