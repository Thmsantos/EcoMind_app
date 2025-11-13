import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  StyleSheet, ScrollView, TextInput,
  Dimensions, Keyboard, Animated, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarSelectionModal from '@/components/AvatarSelectionModal';
import { UserInterface } from './UserInterface';

const { width } = Dimensions.get('window');
const baseWidth = width * 0.9;

const avatarMap: Record<string, any> = {
  "1": require("../../../assets/ecoAvatar/1.png"),
  "2": require("../../../assets/ecoAvatar/2.png"),
  "3": require("../../../assets/ecoAvatar/3.png"),
  "4": require("../../../assets/ecoAvatar/4.png"),
  "5": require("../../../assets/ecoAvatar/5.png"),
  "6": require("../../../assets/ecoAvatar/6.png"),
  "7": require("../../../assets/ecoAvatar/7.png"),
};

export default function Profile() {
  const params = useLocalSearchParams();
  const userId = params.userId;

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [user, setUser] = useState<UserInterface>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<any>("1");

  const navbarTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const saveUser = async () => {
    if (user) {
      await axios.put(`http://127.0.0.1:2010/api/user/${userId}`, user);
    }
  };

  const handleAvatarSelect = (avatarKey: string) => {
    setSelectedAvatar(avatarMap[avatarKey]);
    console.log(avatarKey, avatarMap[avatarKey])
    setUser((prev) => prev ? { ...prev, avatar: avatarKey } : prev);
    setModalVisible(false);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://127.0.0.1:2010/api/user/${userId}`);
        const fetchedUser = response.data;
        setUser(fetchedUser);
        const avatarKey = String(fetchedUser.avatar ?? "1");
        setSelectedAvatar(avatarMap[avatarKey]);
      } catch (error) {
        console.error(error);
      }
    }

    if (userId) fetchUser();

    Animated.timing(navbarTranslateY, {
      toValue: isKeyboardVisible ? 100 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

  }, [userId, isKeyboardVisible]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.avatarContainer}>
              <Image defaultSource={avatarMap[1]} source={selectedAvatar} style={styles.avatar} />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setModalVisible(true)}
              >
                <Icon name="pencil" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.username}>{user?.nome}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>

        <AvatarSelectionModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelectAvatar={handleAvatarSelect}
        />

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Icon name="trophy" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statLabel}>Pódio</Text>
            </View>
          </View>

          <View style={styles.statBox}>
            <Icon name="leaf" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>245 kg</Text>
              <Text style={styles.statLabel}>Emissão Total</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsContainerdois}>
          <View style={styles.statBox}>
            <Icon name="star" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>231</Text>
              <Text style={styles.statLabel}>Pontos</Text>
            </View>
          </View>

          <View style={styles.statBox}>
            <Icon name="arrow-down" size={20} color="black" style={styles.statIcon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statValue}>20,00 kg</Text>
              <Text style={styles.statLabel}>CO₂ economizado</Text>
            </View>
          </View>
        </View>

        <View style={styles.containeredit}>
          <Text style={styles.titleInput}>Nome*</Text>
          <TextInput
            style={styles.input}
            defaultValue={user?.nome}
            onChangeText={(t) => setUser((prev) => prev ? { ...prev, nome: t } : prev)}
          />

          <Text style={styles.titleInput}>Usuário*</Text>
          <TextInput
            style={styles.input}
            defaultValue={user?.usuario}
            onChangeText={(t) => setUser((prev) => prev ? { ...prev, usuario: t } : prev)}
          />

          <Text style={styles.titleInput}>Email*</Text>
          <TextInput
            style={styles.input}
            defaultValue={user?.email}
            onChangeText={(t) => setUser((prev) => prev ? { ...prev, email: t } : prev)}
          />

          <Text style={styles.titleInput}>Senha*</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            onChangeText={(t) => setUser((prev) => prev ? { ...prev, senha: t } : prev)}
          />

          <TouchableOpacity style={styles.botao} onPress={saveUser}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Animated.View style={{ transform: [{ translateY: navbarTranslateY }] }}>
        <Navbar userId={String(userId)} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede55',
  },
  header: {
    backgroundColor: '#71BE70',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    gap: 5
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: '#fff',
    position: 'relative',
    marginBottom: 5,
    borderRadius: 60,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#71BE70',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 18,
    color: '#000',
  },
  statsContainer: {
    width: baseWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  statsContainerdois: {
    width: baseWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center'
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#71BE70',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    elevation: 5,
    width: baseWidth / 2.1,
  },
  statIcon: {
    marginRight: 10,
    marginBottom: 20
  },
  statTextContainer: {
    flexDirection: 'column',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 16,
    color: '#000',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  botao: {
    backgroundColor: '#71BE70',
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    width: baseWidth,
    alignSelf: 'center'
  },
  containeredit: {
    padding: 24,
    backgroundColor: '#dedede55',
    marginBottom: 80,
    width: baseWidth,
    alignSelf: 'center'
  },
  titleInput: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    width: baseWidth,
    alignSelf: 'center',
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  }
});
