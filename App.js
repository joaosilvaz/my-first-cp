import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentual, setPercentual] = useState('');
  const [resultado, setResultado] = useState(null);

  const calculate = () => {

    if (!nomeProduto || !valorOriginal || !percentual) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(percentual);

    const valorAumento = valor * (aumento / 100);
    const novoValor = valor + valorAumento;

    setResultado({
      nomeProduto,
      valorOriginal: valor,
      percentual: aumento,
      valorAumento,
      novoValor
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário: Calculadora de percentual</Text>
      <View style={styles.containerImage}>
        <Image
          source={require('./assets/transferir.png')}
        />
      </View>
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
          <Text style={styles.tituloResultado}>Resultado Do Produto:</Text>
          <Text style={styles.descResultado}>Nome do Produto: {resultado.nomeProduto}</Text>
          <Text style={styles.descResultado}>Valor Original: R$ {resultado.valorOriginal.toFixed(2)}</Text>
          <Text style={styles.descResultado}>Aumento: {resultado.percentual}%</Text>
          <Text style={styles.descResultado}>Valor do Aumento no valor: R$ {resultado.valorAumento.toFixed(2)}</Text>
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
    backgroundColor: '#fff',
    justifyContent: "center"
  },
  containerImage: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
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
  },
  resultado: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  tituloResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red'
  },
  descResultado: {
    fontSize: 20,
    marginBottom: 10,
    color: "black"
  },
  novoValor: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});