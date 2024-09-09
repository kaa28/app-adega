import React from "react";
import { ImageBackground, Text } from "react-native";

import imgCapa from '../../assets/capa.jpg';
import estilos from "./estilo.js";

export default function TelaInicial () {
  return (
    
    <ImageBackground
        blurRadius={ 10 }
        style={ estilos.container }
        source={ imgCapa }
    >
       <Text style={ estilos.titulo }> Adega Preferida </Text> 
       <Text style={ estilos.subtitulo }> Aqui você encontra os melhores e mais saborosos vinhos. </Text> 
    </ImageBackground>
  )
}