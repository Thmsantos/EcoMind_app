import React, { useState } from 'react';
import { View,  Text,  Image,  TextInput,  TouchableOpacity,  ScrollView,  StyleSheet,  Dimensions,  KeyboardAvoidingView,  Platform,} from 'react-native';
import Header from '@/components/header';

const { width, height } = Dimensions.get('window');
const baseWidth = width * 0.9;

export default function CadastroUsuario() {
  const avatars = [
    require('../../../assets/ecoAvatar/1.png'),
    require('../../../assets/ecoAvatar/2.png'),
    require('../../../assets/ecoAvatar/3.png'),
    require('../../../assets/ecoAvatar/4.png'),
    require('../../../assets/ecoAvatar/6.png'),
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [username, setUsername] = useState('');

  const handleAvatarSelect = (img: any) => {
    setSelectedAvatar(img);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Bem-vindo! Vamos criar seu</Text>
        <Text style={styles.title2}>perfil</Text>
        <Text style={styles.subtitle}>Escolha seu avatar preferido:</Text>

        <View style={styles.main}>
          <Image source={selectedAvatar} style={styles.mainAvatar} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.avatarScroll}
            contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 10 }}
          >
            {avatars.map((img, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAvatarSelect(img)}
                style={[
                  styles.avatarWrapper,
                  selectedAvatar === img && styles.avatarSelected,
                ]}
              >
                <Image source={img} style={styles.avatarThumb} />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.label}>Nome de usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: width * 0.05,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'left',
    color: '#1a1a1a',
  },
    title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'left',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
    color: 'black',
    fontWeight: 700,
  },
  main: {
    alignItems: 'flex-start',
  },
  mainAvatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    marginBottom: 30,
    backgroundColor: "rgba(113, 190, 112, 1.00)",
  },
  avatarScroll: {
    marginBottom: 30,
  },
  avatarWrapper: {
    height: 64,
    width: 64,
    marginHorizontal: 6,
    padding: 2,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarSelected: {
    borderColor: '#1a8917',
  },
  avatarThumb: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    width: baseWidth,
    alignSelf: 'center',
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {})
  },
  footer: {
    bottom: 20,
    right: width * 0.05,
    alignItems: 'flex-end',
  },
  button: {
     backgroundColor: "rgba(113, 190, 112, 1.00)",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 26,
    elevation: 2,
  },
  buttonText: {
    color: '#black',
    fontWeight: 'bold',
    fontSize: 16,  
  },
});
