import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentual, setPercentual] = useState('');
  const [resultado, setResultado] = useState(null);

  const calculate = () => {

    if (!nome || !valorOriginal || !percentual) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(percentual);

    const valorAumento = valor * (aumento / 100);
    const novoValor = valor + valorAumento;

    setResultado({
      nome,
      valorOriginal: valor,
      percentual: aumento,
      valorAumento,
      novoValor
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário: Calculadora de percentual</Text>
      <Image
        style={styles.stretch}
        source={require('./assets/form-img.avif')}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto} />
      <TextInput
        style={styles.input}
        placeholder="Valor original"
        keyboardType="numeric"
        value={valorOriginal}
        onChangeText={setValorOriginal} />
      <TextInput
        style={styles.input}
        placeholder="Percentual de aumento"
        keyboardType="numeric"
        value={percentual}
        onChangeText={setPercentual}
      />
      <Button title="Calcular" onPress={calculate} />
      {resultado && (
        <View style={styles.resultado}>
          <Text style={styles.tituloResultado}>Resultado</Text>
          <Text>Produto: {resultado.nome}</Text>
          <Text>Valor Original: R$ {resultado.valorOriginal.toFixed(2)}</Text>
          <Text>Aumento: {resultado.percentual}%</Text>
          <Text>Valor do Aumento: R$ {resultado.valorAumento.toFixed(2)}</Text>
          <Text style={styles.novoValor}>Novo Valor: R$ {resultado.novoValor.toFixed(2)}
          </Text>
        </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#778899',
    justifyContent: "center"
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  }, resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  }, tituloResultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }, novoValor: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});