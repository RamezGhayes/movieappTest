import React ,{useState} from 'react';
import { View, Text, StyleSheet, FlatList ,ActivityIndicator} from 'react-native';
import Item from './Item'
const List = ({fetching, results, onEnd }) => {
 
  renderFooter = () => {
    console.log(fetching);
    return fetching ? <ActivityIndicator size="small" color="#0000ff" /> : null
  }; 


  return (
    <View>
        <FlatList 
        contentContainerStyle={styles.list}
        data={results}
        onEndReached={()=> {
          
          onEnd()
        }
        }
        onEndThreshold={.5}  
        ListFooterComponent={renderFooter}
        keyExtractor= {(results) => results.id.toString()}
        renderItem={({ item }) =>{
            return <Item item={item}/>
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  list: {
    alignItems : 'center',
  }
});

export default List;