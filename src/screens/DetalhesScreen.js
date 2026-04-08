import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { nome, categoria, descricao, url } = route.params;

  return (
    <ScrollView style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: url }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{nome}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Categoria</Text>
        <Text style={styles.value}>{categoria}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.value}>{descricao}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 24,
  },

  imageContainer: {
    width: '100%',
    height: 260,
    backgroundColor: '#eaeaea',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#222',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  label: {
    fontSize: 13,
    color: '#777',
    marginBottom: 6,
  },

  value: {
    fontSize: 16,
    color: '#222',
    lineHeight: 22,
  },
});