// import React from "react";
// import { ImageBackground, Text } from "react-native";

// import imgCapa from '../../assets/capa.jpg';
// import estilos from "./estilo.js";

// export default function TelaInicial () {
//   return (
    
//     <ImageBackground
//         blurRadius={ 10 }
//         style={ estilos.container }
//         source={ imgCapa }
//     >
//        <Text style={ estilos.titulo }> Adega Preferida </Text> 
//        <Text style={ estilos.subtitulo }> Aqui você encontra os melhores e mais saborosos vinhos. </Text> 
//     </ImageBackground>
//   )
// }

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: '../../assets/capa.jpg'};

const TelaInicial = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Adega Preferida</Text>
      <Text style={styles.text}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
    </ImageBackground>
  </View>
);

export default TelaInicial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});