import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Routes } from '../navigation/Route';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'react-native-paper';

async function fetchData() {
    const result = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/4`);
    const json = await result.json();
    return json;
}

export function PokedexScreen() {
    const { isLoading, isError, data, error }:any = useQuery({
        queryKey: ["pokedex"],
        queryFn: fetchData,
    })

    if (isLoading) {
        return <Text>Loading...</Text>
    }
    
    if (isError) {
        return <Text>Error: {error.message}</Text>
    }
      
  const navigation = useNavigation<any>();
  
  function navigateToInfos({name,image,hp,attack,defense,special_attack,special_defense,speed}:any) {
    navigation.navigate(Routes.INFOS_SCREEN,{name,image,hp,attack,defense,special_attack,special_defense,speed});
  }

  const Item = ({id,name,image,hp,attack,defense,special_attack,special_defense,speed}:any) => (
    <TouchableOpacity onPress={()=>navigateToInfos({name,image,hp,attack,defense,special_attack,special_defense,speed})}>
        <Card style={styles.card}>
            <Card.Content style={{alignItems:"center"}}>
                <Text style={{fontSize:20}}>{name}</Text>
                <Image source={{uri:image}} style={{width:100, height:100}}/>
                <Text>{id}</Text>
            </Card.Content>
        </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{backgroundColor:"red"}}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item id={item.id} name={item.name} image={item.image} hp={item.stats.HP} attack={item.stats.attack} defense={item.stats.defense} special_attack={item.stats.special_attack} special_defense={item.stats.special_defense} speed={item.stats.speed}/>}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    card: {
      width : 200,
      marginLeft : 75,
      marginTop : 10,
      alignItems: "center",
      backgroundColor : "azure",
    },
  });

