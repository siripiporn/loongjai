import React, {useState} from 'react';
import {View, Text, Button, FlatList,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/stylesGlobal';

export default function Home({navigation}){
  const [review,setReview] = useState([
      {title:'The First' ,rating: 10, body:'Lorem ipsum', key: '1'},
      {title: 'The second', rating: 20, body: 'Lorem ipsum', key: '2'},
      {title: 'The third',rating: 30, body: 'Lorem ipsm', key:'3'}
  ])

    return(
        <View style={globalStyles.container}>
           <FlatList 
            data={review}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail' , item)}>
                    <Text style={globalStyles.textcontent}> {item.title} </Text>
                </TouchableOpacity>
            )}
           />
            {/* <Button title="Review Detail" onPress={() => navigation.navigate('ReviewDetail')}/> */}

        </View>
    )
}

 