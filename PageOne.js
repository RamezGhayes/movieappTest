import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , ActivityIndicator} from 'react-native';
import Item from './Item'
import useResults from './Result'
import List from './List'

const PageOne = () => {
    const [MoviesApi,results,errorMessage, fetchnewPage, fetching] = useResults();

    return (
        <View>
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <List 
            fetching = {fetching}
            results={results} 
            onEnd={()=> {
                fetchnewPage();
            }} />
           
        </View>
    );
};

const styles = StyleSheet.create({});

export default PageOne;