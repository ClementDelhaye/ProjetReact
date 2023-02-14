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
  
  function navigateToInfos({id,name,image}:any) {
    navigation.navigate(Routes.INFOS_SCREEN,id,name,image);
  }

  const Item = ({id,name,image}:any) => (
    <TouchableOpacity onPress={()=>navigateToInfos({id,name,image})}>
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
    <SafeAreaView style={{backgroundColor:"black"}}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item id={item.id} name={item.name} image={item.image}/>}
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

