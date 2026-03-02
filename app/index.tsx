import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const STARTING_POKEMON = [
  { name: "bulbasaur", uri: "https://pokeapi.co/api/v2/pokemon/1"},
  { name: "ivysaur", uri: "https://pokeapi.co/api/v2/pokemon/2"},
  { name:"venusaur", uri: "https://pokeapi.co/api/v2/pokemon/3"},
  { name:"charmander", uri: "https://pokeapi.co/api/v2/pokemon/4"},
  { name:"charmeleon", uri: "https://pokeapi.co/api/v2/pokemon/5"},
  { name:"charizard", uri: "https://pokeapi.co/api/v2/pokemon/6"},
  { name:"squirtle", uri: "https://pokeapi.co/api/v2/pokemon/7"},
  { name:"wartortle", uri: "https://pokeapi.co/api/v2/pokemon/8"},
  { name:"blastoise", uri: "https://pokeapi.co/api/v2/pokemon/9"},
  { name:"caterpie", uri: "https://pokeapi.co/api/v2/pokemon/10"}
]
const [ActivePokemon] = useState(
  STARTING_POKEMON[Math.floor(Math.random()*STARTING_POKEMON.length)]
//generates, then rounds down a random numbeer from the STARTING_POKEMON array, to then generate a random string frm the array.
)

const pokemonID = ActivePokemon.uri.split("/").filter(Boolean).pop();
const [CurrentInput, SetCurrentInput] = useState("");
const [Status, setStatus] =useState("type your guess....");
const [isRevealed, setIsRevealed] = useState(false);

const handleGuess = ()=>{
  const userGuess = CurrentInput.toLowerCase().trim();
  const correctAnswer = ActivePokemon.name.toLowerCase().trim();
  if(userGuess===correctAnswer){
    alert("correct! its a pokemon!");
    setIsRevealed(true);
  }else{
    alert("Wrong!");
  }
}
export default function Index() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
      <View style={styles.card}>
      <Text style ={styles.header}>Who's that Pokémon?</Text><br></br>

      <Text style ={styles.pokemon}>{ActivePokemon.name}</Text>
      <Image source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}} style={styles.pokeImg}
      blurRadius={25}
      resizeMode="contain"
      />
      <TextInput 
      style={styles.input}
      //value={}
      //onChangeText={}
      placeholder={"   Who's that Pokémon?"}
      />
      <TouchableOpacity style={styles.button}><Text>Guess!</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({container: {flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#e9e9e9'},
card: {padding: 20,backgroundColor:"white",borderRadius: 15,shadowColor: "black",elevation:5,shadowOpacity:0.1,alignItems:"center"},
header: {fontSize:20, color:"#777", marginBottom:10,},
pokemon: {fontSize: 32, color: "#777", fontWeight: "bold",},
pokeImg: {width: 250, height: 250},
input: {height: 50, borderWidth:1, borderColor:"#ccc", padding:20,marginTop:10, borderRadius:5},
button: {backgroundColor:"#777", padding: 15, marginTop:10, borderRadius: 5, alignItems:"center"}
})