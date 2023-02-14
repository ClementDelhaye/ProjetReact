import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Route';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation<any>();
  
  function navigateToPokedex() {
    navigation.navigate(Routes.POKEDEX_SCREEN);
  }
  return (
    <View style={styles.container}>
      <View style={styles.fondTitle}>
        <Text style={styles.title}>
          POKEDEX
        </Text>
      </View>
      <View style={styles.fondText}>
      <Text style={styles.terms}>Bienvenue dans l'application Pokédex !</Text>
        <Button style={styles.bouton} mode="contained" onPress={navigateToPokedex}>
          Accéder au pokédex
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 20,
    marginTop : 75,
    marginBottom : 75,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color : 'white',
  },
  fondTitle: {
    backgroundColor : 'blue',
  },
  fondText: {
    margin : 30,
  },
  input: {
    marginTop : 10,
  },
  bouton: {
    margin : 30,
  },
  terms: {
    color :'grey',
    textAlign: 'center',
    fontSize: 20,
  }
});

