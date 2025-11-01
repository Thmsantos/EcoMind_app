import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const avatars = [
  { id: 1, source: require('../../assets/ecoAvatar/1.png') },
  { id: 2, source: require('../../assets/ecoAvatar/2.png') },
  { id: 3, source: require('../../assets/ecoAvatar/3.png') },
  { id: 4, source: require('../../assets/ecoAvatar/4.png') },
  { id: 6, source: require('../../assets/ecoAvatar/6.png') },
  { id: 7, source: require('../../assets/ecoAvatar/7.png') },
  { id: 8, source: require('../../assets/ecoAvatar/8.png') },
];

interface AvatarSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectAvatar: (avatarSource: any) => void; 
}

const AvatarSelectionModal = ({ visible, onClose, onSelectAvatar }: AvatarSelectionModalProps) => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  const handleSelectAvatar = (id: number) => {
    setSelectedAvatarId(id);
  };

  const handleSave = () => {
    if (selectedAvatarId !== null) {
      const selectedAvatar = avatars.find(avatar => avatar.id === selectedAvatarId);
      if (selectedAvatar) {
        onSelectAvatar(selectedAvatar.source); 
      }
    }
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Escolha seu avatar</Text>
          
          <View style={styles.avatarGrid}>
            {avatars.map((avatar) => ( 
              <TouchableOpacity
            
                key={avatar.id}
             
                onPress={() => handleSelectAvatar(avatar.id)}
                style={[
                  styles.avatarWrapper,
          
                  selectedAvatarId === avatar.id && styles.avatarSelected,
                ]}
              >
             
                <Image source={avatar.source} style={styles.avatarThumb} />
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: width * 0.9,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarWrapper: {
    margin: 8,
    padding: 2,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarSelected: {
    borderColor: '#71BE70',
  },
  avatarThumb: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 120,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#71BE70',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default AvatarSelectionModal;