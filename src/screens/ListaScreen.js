import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

export default function ListaScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Adicionar Filme</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Poster (URL)</Text>
        <TextInput
          style={styles.input}
          placeholder="https://..."
          value={url}
          onChangeText={novaUrl => setUrl(novaUrl)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome do filme</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Interestelar"
          value={nome}
          onChangeText={novoTexto => setNome(novoTexto)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Ficção científica"
          value={categoria}
          onChangeText={novaCategoria => setCategoria(novaCategoria)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Fale um pouco sobre o filme..."
          multiline
          value={descricao}
          onChangeText={novaDescricao => setDescricao(novaDescricao)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Detalhes', { nome, categoria, descricao, url })
        }
      >
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f7f7f7',
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    color: '#222',
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e3e3e3',
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#1f1f1f',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});