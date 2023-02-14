import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export function InfosScreen({route}:any) {
  const {id, name, image}:any = route.params;
  return (
    <View style={styles.infos}>
        <Text style={{fontSize : 30}}>{name}</Text>
        <Image source={{uri:image}} style={{width:100, height:100}}/>
        <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infos: {
    flex : 1,
    alignItems: "center",
    backgroundColor : "azure",
    paddingTop : 50,
  },
});

