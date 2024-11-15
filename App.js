import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const pokemonData = [
  {
    title: '🔥 Fire',    color: '#FA8072', textColor: 'red',
    data: [
      { name: 'Charizard', cardImage: require('./Image/Charizard.png')},
      { name: 'Ninetales', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_38.png'},
      { name: 'Moltres', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_146.png'},
      { name: 'Arcanine', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/scarlet-violet/en-us/SV01_EN_32.png'},
      { name: 'Incineroar', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/temporal-forces/en-us/SV05_EN_34.png'},
      { name: 'Victini', cardImage: require('./Image/Victini.png') },
    ],
  },
  {
    title: '⚡️ Electric',    color: '#FFDD57', textColor: 'yellow',
    data: [
      { name: 'Zapdos', cardImage: require('./Image/Zapdos.png') },
      { name: 'Pikachu', cardImage: require('./Image/Pikachu.png') },
      { name: 'Raichu', cardImage: require('./Image/Raichu.png') },
      { name: 'Miraidon', cardImage: require('./Image/Miraidon.png') },
    ],
  },
  {
    title: '🌱 Grass',    color: 'lightgreen', textColor: 'green',
    data: [
      { name: 'Venusaur', cardImage: require('./Image/Venusaur.png')},
      { name: 'Victreebel', cardImage: require('./Image/Victreebel.png')},
      { name: 'Torterra', cardImage: require('./Image/Torterra.png')},
      { name: 'Roserade', cardImage: require('./Image/Roserade.png')},

    ],

  },
  {
    title: '🌊 Water',    color: 'lightblue', textColor: 'blue',
    data: [
      { name: 'Venusaur', cardImage: require('./Image/Venusaur.png')},
      { name: 'Victreebel', cardImage: require('./Image/Victreebel.png')},
      { name: 'Torterra', cardImage: require('./Image/Torterra.png')},
      { name: 'Roserade', cardImage: require('./Image/Roserade.png')},

    ],
  },

];


const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.pokemonName}>{item.name}</Text>
      {/*<Image source={{ uri: item.cardImage }} style={styles.cardImage} />*/}
      <Image
          source={typeof item.cardImage === 'string' ? { uri: item.cardImage } : item.cardImage}
          style={styles.cardImage}
      />
    </TouchableOpacity>
);

function App() {  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button style={styles.button} title="Add Pokémon"/>
      <SectionList
          sections={pokemonData}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderPokemon}
          renderSectionHeader={({ section }) => (
              <View style={[styles.header, { backgroundColor: section.color }]}>
                <Text style={[styles.headerText, { color: section.textColor || '#333' }]}>
                  {section.title}
                </Text></View>
          )}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
  },

  header: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    borderWidth: 1,
  },

  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
  },
});

export default App;
