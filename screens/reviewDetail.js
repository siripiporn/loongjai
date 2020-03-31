import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/stylesGlobal';
import Card from '../shared/card';

export default function ReviewDetail({ route, navigation }) {
    const { title, rating, body } = route.params;
    return (

        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text> {body}</Text>
                <View style={globalStyles.rating} ><Text>Rating:</Text>
                    <Image source={images.retings[rating]} />
                </View>
            </Card>
            <Button title="Review Detail" onPress={() => navigation.navigate('Home')}
            />
        </View>

    )
}

