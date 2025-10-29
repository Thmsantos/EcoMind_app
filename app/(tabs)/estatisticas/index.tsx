import Navbar from '@/components/navbar/navbar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../../components/header';
import colors from '../../../components/colors/colors';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react";

export default function Resultados() {

  const happyEmoji = require("../../../assets/images/happy.png");
  const medioEmoji = require("../../../assets/images/neutral.png");
  const sadEmoji = require("../../../assets/images/sad-face.png");

  const [abaSelecionada, setAbaSelecionada] = useState<'consumo' | 'grafico'>('consumo');

  const resultados = [
    { mes: "Fevereiro", consumo: 140 },
    { mes: "Março", consumo: 160 },
    { mes: "Abril", consumo: 150 },
    { mes: "Maio", consumo: 150 },
    { mes: "Junho", consumo: 380 },
    { mes: "Julho", consumo: 430 },
    { mes: "Agosto", consumo: 280 },
    { mes: "Setembro", consumo: 260 },
    { mes: "Outubro", consumo: 400 },
    { mes: "Novembro", consumo: 400 },
  ];

  const limites = { baixa: 166, media: 416 };

  const getEmojiColor = (consumo: number) => {
    if (consumo <= limites.baixa) return colors.estatisticas.ideal;
    if (consumo <= limites.media) return colors.estatisticas.medio;
    return colors.estatisticas.alto;
  };

  const getEmoji = (consumo: number) => {
    if (consumo <= limites.baixa) return happyEmoji;
    if (consumo <= limites.media) return medioEmoji;
    return sadEmoji;
  };

  const getBalanco = (index: number) => {
    if (index === 0)
      return {
        texto: "sem referência",
        cor: colors.textPrimary,
        icone: <ArrowRight color={colors.icon} size={22} />,
      };

    const anterior = resultados[index - 1].consumo;
    const atual = resultados[index].consumo;

    if (atual < anterior)
      return {
        texto: "Redução da emissão",
        cor: colors.estatisticas.ideal,
        icone: <ArrowDown color={colors.estatisticas.ideal} size={26} />,
      };

    if (atual > anterior)
      return {
        texto: "Aumento da emissão",
        cor: colors.estatisticas.alto,
        icone: <ArrowUp color={colors.estatisticas.alto} size={26} />,
      };

    return {
      texto: "Emissão mantida",
      cor: colors.estatisticas.medio,
      icone: <ArrowRight color={colors.estatisticas.medio} size={26} />,
    };
  };

  return (
    <View style={styles.container}>
      <Header title="Estatísticas" />

      {/* Abas no topo */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, abaSelecionada === 'consumo' && styles.tabAtiva]}
          onPress={() => setAbaSelecionada('consumo')}
        >
          <Text style={[styles.tabText, abaSelecionada === 'consumo' && styles.tabTextAtiva]}>
            Consumo Mensal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaSelecionada === 'grafico' && styles.tabAtiva]}
          onPress={() => setAbaSelecionada('grafico')}
        >
          <Text style={[styles.tabText, abaSelecionada === 'grafico' && styles.tabTextAtiva]}>
            Gráfico Anual
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  Consumo Mensal */}
        {abaSelecionada === 'consumo' && (
          <View style={styles.viewMain}>
            {resultados.map((item, index) => {
              const balanco = getBalanco(index);
              const emojiCor = getEmojiColor(item.consumo);
              const emoji = getEmoji(item.consumo);

              return (
                <View key={index} style={styles.card}>
                  <View style={styles.groupText}>
                    <Text style={styles.textBold}>
                      Mês: <Text style={styles.textMedium}>{item.mes}</Text>
                    </Text>
                    <Text style={styles.textBold}>
                      Emissão: <Text style={styles.textMedium}>{item.consumo} kg</Text>
                    </Text>

                    <View style={styles.arrowRow}>
                      {balanco.icone}
                      <Text style={[styles.textResult, { color: balanco.cor }]}>
                        {balanco.texto}
                      </Text>
                    </View>

                    <Image
                      style={[styles.emoji, { tintColor: emojiCor }]}
                      source={emoji}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* Gráfico */}
        {abaSelecionada === 'grafico' && (
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Gráfico Anual de CO₂</Text>
            <LineChart
              data={{
                labels: resultados.map((r) => r.mes.substring(0, 3)),
                datasets: [{ data: resultados.map((r) => r.consumo) }],
              }}
              width={Dimensions.get("window").width - 30}
              height={220}
              yAxisSuffix="kg"
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
                labelColor: () => '#000000',
                propsForLabels: {
                  fontSize: 16, 
                },
                propsForDots: { r: "5", strokeWidth: "2", stroke: "#71BE70" },
              }}
             
            />

            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: colors.estatisticas.ideal }]} />
                <Text style={styles.legendText}>Baixa emissão (≤166 kg)</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: colors.estatisticas.medio }]} />
                <Text style={styles.legendText}>Média emissão (167–416 kg)</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: colors.estatisticas.alto }]} />
                <Text style={styles.legendText}>Alta emissão ({'>'}416 kg)</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      <Navbar userId={''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    margin: 15,
    padding: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 25,
  },
  tabAtiva: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textMuted,
  },
  tabTextAtiva: {
    color: colors.secondary,
  },
  viewMain: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 100,
    gap: 25,
  },
  card: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    width: 350,
    alignSelf: "center",
    padding: 20,
    backgroundColor: colors.cardBackground,
  },
  groupText: {
    flexDirection: "column",
  },
  arrowRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 5,
  },
  emoji: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
  },
  textBold: {
    fontWeight: "700",
    fontSize: 17,
    color: colors.textDark,
  },
  textMedium: {
    fontWeight: "400",
    color: colors.textPrimary,
  },
  textResult: {
    fontWeight: "600",
    fontSize: 15,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 10,
  },
  legendContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  legendColor: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 15,
    color: colors.textPrimary,
  },
});
