import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PDFReaderApp = () => {
  const [recentFiles, setRecentFiles] = useState([]);

  const openPdf = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      const file = {
        name: result.name,
        uri: result.uri,
      };

      setRecentFiles((prevFiles) => [file, ...prevFiles]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // L'utilisateur a annulé la sélection du fichier
      } else {
        Alert.alert('Erreur lors de la sélection du fichier');
      }
    }
  };

  const renderRecentFiles = ({ item }) => (
    <View>
      <Text>Nom du fichier: {item.name}</Text>
      {/* Ajoute d'autres informations que tu veux afficher */}
    </View>
  );

  return (
    <View>
      <Button title="Ouvrir PDF" onPress={openPdf} />
      <FlatList
        data={recentFiles}
        keyExtractor={(item) => item.uri}
        renderItem={renderRecentFiles}
      />
    </View>
  );
};

export default PDFReaderApp;
