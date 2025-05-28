import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import Navbar from '@/components/navbar/navbar';

// Captura a largura da tela
const { width } = Dimensions.get('window');

export default function Profile() {
  const rankingData = [
    { id: 1, name: 'User01', progress: 0.8 },
    { id: 2, name: 'User02', progress: 0.6 },
    { id: 3, name: 'User03', progress: 0.4 },
    { id: 4, name: 'User04', progress: 0.2 },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../../../assets/images/logo-home.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Ranking</Text>
      </View>

      {/* Imagem do Troféu */}
      <Image source={require('../../../assets/images/trofeu.png')} style={styles.trophy} />

      {/* Lista de Ranking */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {rankingData.map((user) => (
          <View key={user.id} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.positionCircle}>
                <Text style={styles.positionText}>{user.id}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.username}>{user.name}</Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progress, { width: `${user.progress * 100}%` }]} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.14,
    height: width * 0.14,
    marginRight: -9, // Aproxima o logo do texto
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  trophy: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginVertical: 30,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#E0F2E9',
    borderColor: '#71BE70',
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#71BE70',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  positionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C8E6C9',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#71BE70',
  },
});
