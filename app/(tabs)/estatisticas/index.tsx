import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../../components/header';
import colors from '../../../components/colors/colors'; // ✅ Importando o arquivo de cores

export default function Resultados() {

  const happyEmoji = require("../../../assets/images/happy.png");
  const medioEmoji = require("../../../assets/images/neutral.png");
  const sadEmoji = require("../../../assets/images/sad-face.png");

  const resultados = [
    { mes: "Fevereiro", consumo: 230, balanco: 'positivo' },
    { mes: "Março", consumo: 500, balanco: 'negativo' },
    { mes: "Abril", consumo: 150, balanco: 'positivo' },
    { mes: "Maio", consumo: 150, balanco: 'idem' },
    { mes: "Junho", consumo: 300, balanco: 'negativo' },
    { mes: "Julho", consumo: 280, balanco: 'positivo' },
    { mes: "Agosto", consumo: 280, balanco: 'idem' },
    { mes: "Setembro", consumo: 260, balanco: 'positivo' },
    { mes: "Outubro", consumo: 400, balanco: 'negativo' },
    { mes: "Novembro", consumo: 390, balanco: 'positivo' }
  ];

  // ✅ Pegando as cores diretamente do colors.ts
  const limites = {
    ideal: { max: 175, cor: colors.estatisticas.ideal },  // Verde
    medio: { max: 350, cor: colors.estatisticas.medio },  // Amarelo
    alto: { max: Infinity, cor: colors.estatisticas.alto } // Vermelho
  };

  const getEmoji = (valor: number) => {
    if (resultados[valor].balanco === 'positivo') return happyEmoji;
    if (resultados[valor].balanco === 'negativo') return sadEmoji;
    if (resultados[valor].balanco === 'idem') return medioEmoji;
  };

  const getCor = (valor: number) => {
    if (resultados[valor].balanco === 'positivo') return limites.ideal.cor;
    if (resultados[valor].balanco === 'negativo') return limites.alto.cor;
    if (resultados[valor].balanco === 'idem') return limites.medio.cor;
  };

  const getBalanco = (valor: number) => {
    if (resultados[valor].balanco === 'positivo') return 'redução';
    if (resultados[valor].balanco === 'negativo') return 'aumento';
    if (resultados[valor].balanco === 'idem') return 'mantimento';
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header title="Estatísticas" />

        <View style={styles.viewMain}>
          {resultados.map((item, index) => (
            <View
              key={index}
              style={[styles.contentEstatisticas, { backgroundColor: getCor(index) }]}
            >
              <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.groupText}>
                  <Text style={styles.textResult}>
                    <Text style={styles.textBold}>
                      Mês: <Text style={styles.textMedium}>{item.mes}</Text>
                    </Text>
                  </Text>

                  <Text style={styles.textResult}>
                    <Text style={styles.textBold}>
                      Sua emissão: <Text style={styles.textMedium}>{item.consumo} kg</Text>
                    </Text>
                  </Text>

                  <Text style={styles.textResult}>
                    <Text style={styles.textBold}>Balanço: </Text>
                    <Text>{getBalanco(index)} da emissão.</Text>
                  </Text>

                  <Image style={styles.emoji} source={getEmoji(index)} />
                </View>
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
      <Navbar userId={''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // ✅ Fundo padrão do app
  },
  viewLogo: {
    margin: "auto",
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 65,
    height: 65,
  },
  viewImagemLogo: {
    width: 55,
    height: 70,
  },
  nomeAppLogo: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary, // ✅ Texto do logo
  },
  viewMain: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 100,
    gap: 30,
  },
  estatisticas: {
    flexDirection: "row",
  },
  groupText: {
    flexDirection: "column",
  },
  emoji: {
    position: "absolute",
    top: 10,
    left: 250,
  },
  textResult: {
    fontSize: 17,
    color: colors.textPrimary, // ✅ Texto principal
  },
  textBold: {
    fontWeight: "700",
    fontSize: 19,
    color: colors.textDark, // ✅ Texto destacado
  },
  textMedium: {
    fontWeight: "400",
    fontSize: 17,
    color: colors.textPrimary, // ✅ Texto complementar
  },
  contentEstatisticas: {
    borderWidth: 2,
    borderColor: colors.border, // ✅ Borda padronizada
    borderStyle: 'solid',
    margin: "auto",
    width: 350,
    height: 130,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    paddingTop: 20,
  },
});
