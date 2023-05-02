import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button } from 'react-native';
import Menu from './Menu.js'



export default function ProfileScreen(props) {
  return (
    <View>
      <Menu navigation={props.navigation}></Menu>
      <View style={styles.interface}>
        <Text style={styles.header}>Реєстрація</Text>
      </View>
      <View>
        <Text style={styles.inputLabel}>Електронна пошта</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputLabel}>Пароль</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputLabel}>Імʼя</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputLabel}>Прізвище</Text>
        <TextInput style={styles.input}/>
        <View style={styles.buttonInterface}>
          <Button title='Зареєструватися'/>
        </View>
      </View>
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
  inputLabel: {
    paddingLeft: 10,

  },
  input: {
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,

  },
  buttonInterface: {
    backgroundColor: "#73A353",
    marginTop: 20, 
    marginLeft: 20,
    marginRight: 20 
  
  }
});
