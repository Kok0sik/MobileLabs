import * as React from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';




export default function Menu({navigation}) {
    return (
        <View>
            <View style={styles.interface}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.title}>MobileApp</Text>
            </View>
            <View style={styles.menuInterface}>
                <View style={styles.buttonsInterface}>
                    <Button
                        title="Новини"
                        onPress={() => navigation.navigate('News')}
                    />
                    <Button
                        title="Фотогалерея"
                        onPress={() => navigation.navigate('Gallery')}
                    />
                    <Button
                        title="Профіль"
                        onPress={() => navigation.navigate('Profile')}
                    />
                </View>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    menuInterface: {
        marginTop: 20,
        height: 40,
    },
    logo: {
        width: 180,
        height: 50,
      },
      interface: {
        paddingTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      buttonsInterface: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

      }
  });