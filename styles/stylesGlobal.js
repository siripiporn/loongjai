import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    textcontent: {
        fontFamily: 'prompt-regular',
        fontSize: 19,
        color: '#333'

    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth:1,
        borderTopColor:  '#eee'
    },
    logo: {
        width: 26,
        height:26,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerTitle:{
        flexDirection: 'row'
    },
    icon:{
        position:'absolute',
        left: 16
    },
    modalContent:{
        flex: 1,
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
        borderColor: '#f2f2f2',
    },
    input:{
        borderWidth:1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        marginTop:5,
        borderRadius:6
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
   
})

export const images = {
    retings: {
        '1': require('../assets/Images/rating-1.png'),
        '2': require('../assets/Images/rating-2.png'),
        '3': require('../assets/Images/rating-3.png'),
        '4': require('../assets/Images/rating-4.png'),
        '5': require('../assets/Images/rating-5.png')
    }
}