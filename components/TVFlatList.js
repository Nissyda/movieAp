import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Poster from './Poster';

export default function TVFlatList(props) {
    const url = props.url;
    const listName = props.listName;
    const navigation = props.navigation;

    const [tv, setTV] = useState({});

  useEffect(() => {
    async function getTV() {
      try {
        const results = await axios.get(url);
        setTV(results.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTV();
  }, []);
  return (
    <View>
      <Text style={styles.listName}>{listName}</Text>

      <FlatList
        data={tv}
        keyExtractor={item => item.id}
        horizontal={true}
        flashScrollIndicators
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("TVDetail", {tv: item})}>
            <View style={styles.tvContainer}>
                <Poster posterPath={item.poster_path} imageWidth={300} imageHeight={200}></Poster>
            <Text numberOfLines={1} style={styles.tvTitle}>{item.name}</Text>
            </View>
        </TouchableOpacity>
        )}>
      </FlatList>

    </View>
  );
}

const styles = StyleSheet.create({
  listName: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
  tvContainer: {
    width: 130,
    marginRight: 10,
    marginBottom: 30
  },
  tvTitle: {
    color: '#ccc', 
    fontSize: 14
  }
});
