import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const Item = ({ item }) => {

   
    return (
        <View style={styles.Container}>
            <Text style={styles.name}>{item.original_title}</Text>
            <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
            <Text style={styles.details} >{item.overview}</Text>
            <Text style={styles.date} >{item.release_date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        margin: 10,
        width: 320,
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10
    },

    image: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 10,
        width: 250,
        height: 320,
    },
    name: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center', 
        fontWeight: 'bold'
    },
    date: {
        textAlign: 'center', 
        fontWeight: 'bold'

    },
    details: {
        textAlign: 'left', 
        marginBottom: 10,

    }
});

export default Item;