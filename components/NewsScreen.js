import * as React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu.js'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default function NewsScreen(props) {

  const [appNews, setNews] = useState([]);

  useEffect(() => {
      fetch('https://dummyjson.com/posts?skip=5&limit=10')
        .then(res=>res.json())
        .then(json=>setNews(json.posts))

  }, [])


  return (
    <View>
      <Menu navigation={props.navigation}></Menu>
      <View style={styles.interface}>
        <Text style={styles.header}>Новини</Text>
      </View>
      <ScrollView>

        {
          appNews.map((appNew => {return (
            <View key={appNew.id} style={styles.interface}>
              <View>
                <Image
                  style={styles.newsImg}
                  source={require('../assets/menu-icon.png')}
                />
              </View>
              <View style={styles.textPart}>
                <Text style={styles.title}>{appNew.title}</Text>
                <Text style={styles.date}>{appNew.reactions}</Text>
                <Text>{appNew.tags[0]}</Text>
              </View>
            </View>
          )}))
        }

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
  title: {
    fontSize: 20,
    width: 300,
    fontWeight: 'bold',
  },
  newsImg: {
   height: 80,
    width: 80,
    
  },
  date: {
    fontSize: 10,
  },
});