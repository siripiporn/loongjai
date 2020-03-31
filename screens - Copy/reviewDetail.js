import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/stylesGlobal';

export default function ReviewDetail({ route, navigation }) {
    const { title, rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Button title="Review Detail" onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

