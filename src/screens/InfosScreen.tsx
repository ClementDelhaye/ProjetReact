import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export function InfosScreen({route}:any) {
  const {name, image,hp,attack,defense,special_attack,special_defense,speed}:any = route.params;
  return (
    <View style={styles.infos}>
        <Image source={{uri:image}} style={{width:300, height:300}}/>
        <Text style={{fontSize : 30, paddingBottom : 20}}>{name}</Text>
        <Text>PV : {hp}</Text>
        <Text>Attaque : {attack}</Text>
        <Text>Défense : {defense}</Text>
        <Text>Attaque spéciale : {special_attack}</Text>
        <Text>Défense spéciale : {special_defense}</Text>
        <Text>Vitesse : {speed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infos: {
    flex : 1,
    alignItems: "center",
    backgroundColor : "azure",
    paddingTop : 30,
  },
});

