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
import Header from '@/components/header';
import colors from '@/components/colors/colors';

const { width } = Dimensions.get('window');

export default function Profile() {
  const [search, setSearch] = useState('');

  const names = [
    'Claudia', 'João', 'Maria', 'Pedro', 'Ana',
    'Lucas', 'Fernanda', 'Gabriel', 'Larissa', 'Carlos',
    'Juliana', 'Bruno', 'Amanda', 'Felipe', 'Camila',
    'Rafael', 'Isabela', 'Rodrigo', 'Patrícia', 'Daniel',
    'Vanessa', 'Eduardo', 'Letícia', 'Henrique', 'Bianca',
    'Diego', 'Mariana', 'Thiago', 'Renata', 'Gustavo'
  ];

  const rankingData = useMemo(() =>
    names.map((name, i) => ({
      id: i + 1,
      name,
      progress: parseFloat(Math.random().toFixed(2)),
    })), []
  );

  const rankedData = useMemo(() => {
    return rankingData
      .sort((a, b) => b.progress - a.progress)
      .map((user, index) => ({ ...user, rank: index + 1 }));
  }, [rankingData]);

  const filteredRanking = useMemo(() => {
    return rankedData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, rankedData]);

  return (
    <View style={styles.container}>
      <Header title="Ranking"/>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.icon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar usuário"
          placeholderTextColor={colors.placeholder}
          value={search}
          onChangeText={setSearch}        
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {filteredRanking.length > 0 ? (
          filteredRanking.map((user) => (
            <View key={user.id} style={styles.card}>
              <View style={styles.cardContent}>
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
                    <Text style={[styles.positionText, {color: colors.textDark}]}>{user.rank}</Text>
                  )}
                  <View style={[styles.positionCircle, {backgroundColor: colors.primary}]} />
                </View>

                <View style={styles.info}>
                  <View style={styles.infoHeader}>
                    <Text style={[styles.username, {color: colors.textDark}]}>{user.name}</Text>
                    <Text style={[styles.progressText, {color: colors.textMuted}]}>
                      {Math.round(user.progress * 100)}%
                    </Text>
                  </View>
                  <View style={[styles.progressBar, {backgroundColor: colors.progressBackground}]}>
                    <View
                      style={[styles.progress, {width: `${user.progress * 100}%`, backgroundColor: colors.primary}]}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={[styles.noResult, {color: colors.textMuted}]}>Nenhum usuário encontrado.</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: colors.textPrimary,
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
    backgroundColor: colors.cardBackground,
    borderColor: colors.primary,
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.textPrimary,
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
    fontWeight: 'bold',
    fontSize: 19,
    marginRight: 19,
  },
  positionCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  },
  progressText: {
    fontSize: 14,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
  },
  noResult: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 30,
    fontSize: 16,
  },
});
