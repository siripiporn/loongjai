import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/stylesGlobal';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../shared/reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [review, setReview] = useState([
        { title: 'The First', rating: 3, body: 'Lorem ipsum', key: '1' },
        { title: 'The second', rating: 5, body: 'Lorem ipsum', key: '2' },
        { title: 'The third', rating: 1, body: 'Lorem ipsm', key: '3' }
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((correntReviews) => {
            return [review, ...correntReviews];
        }),
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.modalContent}>
                    <MaterialIcons
                        style={{...globalStyles.modalToggle, ...globalStyles.modalClose}}
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
                  <ReviewForm addReview ={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                style={globalStyles.modalToggle}
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
                        <Card>
                            <Text style={globalStyles.textcontent}> {item.title} </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/* <Button title="Review Detail" onPress={() => navigation.navigate('ReviewDetail')}/> */}

        </View>
    )
}

