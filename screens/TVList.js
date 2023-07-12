import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { requests } from '../request';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TVFlatList from '../components/TVFlatList';

export default function TVList({ navigation }) {
  const [picupTV, setPicupTV] = useState({});

  useEffect(() => {
    async function getPickUpTV() {
      try {
        const result = await axios.get(requests.tv.ON_THE_AIR);
        const number = Math.floor(Math.random() * (result.data.results.length - 1) + 1);
        setPicupTV(result.data.results[number]);
      } catch (error) {
        console.log(error);
      }
    }
    getPickUpTV();
  }, []);
  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("TVDetail", {tv: picupTV})}>
      <View style={styles.pickupContainer}>
        <Image style={styles.pickupImage} source={{uri: `https://image.tmdb.org/t/p/w780${picupTV.poster_path}`}}></Image>
        <Text style={styles.pickupTitle}>{picupTV.name}</Text>
      </View>
    </TouchableOpacity>
      <TVFlatList url={requests.tv.ON_THE_AIR} listName={'公開中のテレビ番組'} navigation={navigation}></TVFlatList>
      <TVFlatList url={requests.tv.POPULARS} listName={'人気のテレビ番組'} navigation={navigation}></TVFlatList>
      <TVFlatList url={requests.tv.TOP_RATED} listName={'高評価のテレビ番組'} navigation={navigation}></TVFlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202328'
  },
  pickupContainer: {
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  pickupImage: {
    height: 350, 
    width: '45%',
    resizeMode: 'contain'
  },
  pickupTitle: {
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    width: '45%', 
    marginLeft: 5
  },
  listName: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold',
  }
});
