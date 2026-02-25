import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const STARTING_POKEMON = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
]
const [ActivePokemon] = useState(
  STARTING_POKEMON[Math.floor(Math.random()*STARTING_POKEMON.length)]
//generates, then rounds down a random numbeer from the STARTING_POKEMON array, to then generate a random string frm the array.
)

export default function Index() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
      <view style={styles.card}>
      <Text style ={styles.header}>Whos that pokemon?</Text><br></br>
      <Text style ={styles.pokemon}>{ActivePokemon}</Text>
      </view>
    </SafeAreaView>
    </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({container: {flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#e9e9e9'},
card: {padding: 20,backgroundColor:"white",borderRadius: 15,shadowColor: "black",elevation:5,shadowOpacity:0.1,alignItems:"center"},
header: {fontSize:20, color:"#777", marginBottom:10,},
pokemon: {fontSize: 32, color: "#777", fontWeight: "bold",},
})