import * as React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu.js'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function GalleryFoto(props) {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
      fetch('https://dummyjson.com/products?limit=19')
        .then(res=>res.json())
        .then(json=>setPhotos(json.products)) 
  }, [])

  return (
    <View>
      <Menu navigation={props.navigation}></Menu>
      <View style={styles.interface}>
        <Text style={styles.header}>Фото</Text>
      </View>
      <ScrollView>
        <View style={styles.photosInterface}>

        {
          photos.map((photo => {return <Image
            style={styles.photoInterface} 
            key={photo.id}
            source={{
              uri: photo.thumbnail,
            }}
          />})) 
        }
        </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',

  },
  interface: {
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  photosInterface: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    flexWrap: 'wrap',
    
  },
  photoInterface: {
    width: 120,
    height: 120,
    marginTop: 40,
    backgroundColor: 'white',
    shadowColor: "#ffffff",
    shadowRadius: 20,
    shadowOpacity: 0.5,

  },
});
