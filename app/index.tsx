import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
// add functionality here later.
)

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        
    <View style={styles.container}>
      <Text>Whos that pokemon?</Text>
      <Text>{ActivePokemon}</Text>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#00cc00'}
  
})