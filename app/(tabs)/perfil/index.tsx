import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Keyboard, Animated, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarSelectionModal from '@/components/AvatarSelectionModal';

const { width } = Dimensions.get('window');
const baseWidth = width * 0.9;

export default function Profile() {
  const params =  useLocalSearchParams()
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [userForm, setUserForm] = useState<any>()
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(require("../../../assets/images/avatar.png"));

  const navbarTranslateY = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSalvar = () => {
    alert('salvo')
  }
  
  const handleAvatarSelect = (avatar: any) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  }
  
  useEffect(() => {
    Animated.timing(navbarTranslateY, {
      toValue: isKeyboardVisible ? 100 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isKeyboardVisible]);
  
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
              <Image source={selectedAvatar} style={styles.avatar} />
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => setModalVisible(true)}
              >
                <Icon name="pencil" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.username}>Mari_Siqueira</Text>
            <Text style={styles.email}>mari@gmail.com</Text>
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
              <Text style={styles.statValue}>2 </Text>
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
            defaultValue='Mariana Siqueira'
          />

          <Text style={styles.titleInput}>Usuário*</Text>
          <TextInput
            style={styles.input}
            defaultValue='Mari_Siqueira'
          />

          <Text style={styles.titleInput}>Email*</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            defaultValue='mari@gmail.com'
          />

          <Text style={styles.titleInput}>Senha*</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            keyboardType="default"
          />

          <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      <Animated.View style={{ transform: [{ translateY: navbarTranslateY }] }}>
        <Navbar userId={''} />
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
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    headerContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 5,
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
        paddingBottom: 2,
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
        alignItems: 'center',
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
        marginLeft: 0,
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
        textAlign: 'center',
        color: '#000',
    },
    arrowright: {
        marginLeft: 187
    },
    arrowrightduo: {
        marginLeft: 173
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        textAlign: 'left',
    },
    botao: {
        backgroundColor: '#71BE70',
        padding: 12,
        borderRadius: 30,
        borderWidth: 0,
        alignItems: "center",
        width: baseWidth, 
        alignSelf: 'center'
    },
    containeredit: {
        flex: 1,
        padding: 24,
        backgroundColor: '#dedede55',
        justifyContent: 'center',
        marginBottom: 80,
        width: baseWidth, 
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
        marginLeft: -18
    },
    titleInput: {
        marginBottom: 10,
        marginLeft: -18
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
    },
    medal: {
        width: 35,
        height: 35
    }
});
