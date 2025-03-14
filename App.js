import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentual, setPercentual] = useState('');
  const [resultado, setResultado] = useState(null);
  const calcular = () => {
    // Verificar se os campos estão preenchidos    
    if (!nome || !valorOriginal || !percentual) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    // Converter valores para números    
    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(percentual);
    // Calcular novo valor    
    const valorAumento = valor * (aumento / 100);
    const novoValor = valor + valorAumento;
    // Armazenar resultados    
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
      <Text style={styles.titulo}>Calculadora de Aumento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome} />
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
      <Button title="Calcular" onPress={calcular} />
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
    backgroundColor: '#fff',
  }, titulo: {
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