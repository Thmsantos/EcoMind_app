import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {

  const consumo = 280; 

  const limites = {
    ideal: { max: 175, cor: "#4CAF50" },     
    medio: { max: 350, cor: "#FFC107" },    
    alto: { max: Infinity, cor: "#F44336" }, 
  };

  
  let corFundo;
  if (consumo <= limites.ideal.max) {
    corFundo = limites.ideal.cor;
  } else if (consumo <= limites.medio.max) {
    corFundo = limites.medio.cor;
  } else {
    corFundo = limites.alto.cor;
  }

  return (
    <View style={[styles.bloco, { backgroundColor: corFundo }]}>
      <Text style={styles.texto}>Consumo: {consumo} kg CO₂/mês</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

