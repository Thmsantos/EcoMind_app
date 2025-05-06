import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
];

export default function CadastroUsuario() {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [username, setUsername] = useState('');

  const handleAvatarSelect = (uri: React.SetStateAction<string>) => {
    setSelectedAvatar(uri);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedAvatar }} style={styles.mainAvatar} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.avatarScroll}
        contentContainerStyle={{ alignItems: 'center' }}
        >
        {avatars.map((uri, index) => (
            <TouchableOpacity
            key={index}
            onPress={() => handleAvatarSelect(uri)}
            style={[
                styles.avatarWrapper,
                selectedAvatar === uri && styles.avatarSelected,
            ]}
            >
            <Image source={{ uri }} style={styles.avatarThumb} />
            </TouchableOpacity>
        ))}
    </ScrollView>


      <Text style={styles.label}>Cadastro de usuário</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Username</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Escolha seu usuário</Text>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Cail Potio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  mainAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
    backgroundColor: '#cfcfcf',
  },
  avatarScroll: {
    marginBottom: 20,
  },
  avatarWrapper: {
    height: 58,
    marginHorizontal: 6,
    padding: 2,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarSelected: {
    borderColor: 'green',
  },
  avatarThumb: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  label: {
    fontSize: 18,
    
    fontWeight: 'bold',
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
  },
  button: {
    backgroundColor: '#1a8917',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#888',
    marginTop: 10,
    marginBottom: 20,
  },
  footerButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
