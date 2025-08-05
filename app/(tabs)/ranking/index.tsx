import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/navbar/navbar';

const { width } = Dimensions.get('window');

export default function Profile() {
  const [search, setSearch] = useState('');

  // Lista personalizada de nomes
  const names = [
    'Claudia', 'João', 'Maria', 'Pedro', 'Ana',
    'Lucas', 'Fernanda', 'Gabriel', 'Larissa', 'Carlos',
    'Juliana', 'Bruno', 'Amanda', 'Felipe', 'Camila',
    'Rafael', 'Isabela', 'Rodrigo', 'Patrícia', 'Daniel',
    'Vanessa', 'Eduardo', 'Letícia', 'Henrique', 'Bianca',
    'Diego', 'Mariana', 'Thiago', 'Renata', 'Gustavo'
  ];

  // Gera os dados com base na lista de nomes
  const rankingData = useMemo(() =>
    names.map((name, i) => ({
      id: i + 1,
      name,
      progress: parseFloat(Math.random().toFixed(2)),
    })), []
  );

  // Ordena os dados por progresso e adiciona a posição
  const rankedData = useMemo(() => {
    return rankingData
      .sort((a, b) => b.progress - a.progress)
      .map((user, index) => ({ ...user, rank: index + 1 }));
  }, [rankingData]);

  // Aplica o filtro de pesquisa
  const filteredRanking = useMemo(() => {
    return rankedData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, rankedData]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo-home.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Ranking</Text>
      </View>

      {/* Troféu decorativo */}
     

      {/* Campo de pesquisa */}


     <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar usuário"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}



        
        />
      </View>

      {/* Lista de Ranking */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {filteredRanking.length > 0 ? (
          filteredRanking.map((user) => (
            <View key={user.id} style={styles.card}>
              <View style={styles.cardContent}>
                {/* Medalha ou Número com base na posição real */}
                <View style={styles.positionContainer}>
                  {user.rank === 1 ? (
                    <Image
                      source={require('../../../assets/images/medalha-ouro.png')}
                      style={styles.medal}
                    />
                  ) : user.rank === 2 ? (
                    <Image
                      source={require('../../../assets/images/medalha-prata.png')}
                      style={styles.medal}
                    />
                  ) : user.rank === 3 ? (
                    <Image
                      source={require('../../../assets/images/medalha-bronze.png')}
                      style={styles.medal}
                    />
                  ) : (
                    <Text style={styles.positionText}>{user.rank}</Text>
                  )}
                  <View style={styles.positionCircle} />
                </View>

                {/* Informações do usuário */}
                <View style={styles.info}>
                  <View style={styles.infoHeader}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.progressText}>
                      {Math.round(user.progress * 100)}%
                    </Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progress,
                        { width: `${user.progress * 100}%` },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResult}>Nenhum usuário encontrado.</Text>
        )}
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.12,
    height: width * 0.12,
    marginRight: -9,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  trophyBackground: {
    width: 130,
    height: 130,
    position: 'absolute',
    top: 1,
    right: 110,
    opacity: 0.16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
     flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
    
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    
  },
  card: {
    backgroundColor: '#E0F2E9',
    borderColor: '#71BE70',
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    marginLeft: -7,
    
  },
  medal: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 1,
    marginLeft: -10,
  },
  positionText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 19,
    marginRight: 19,
  },
  positionCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#71BE70',
    marginLeft: 8,
    
  },
  info: {
    flex: 1,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  progressText: {
    fontSize: 14,
    color: '#444',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C8E6C9',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#71BE70',
  },
  noResult: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#666',
    marginTop: 30,
    fontSize: 16,
  },


  
});