import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import List from './List'

export default function Header() {

  const [balance, setBalance] = useState(0);
  const [newValue, addNewValue] = useState('');
  const [newList, addNewList] = useState('');

  return (
    <View style={styles.container}>
      <h1>{balance}</h1>
      <h2>Details of Expense</h2>
      <TextInput
        style={styles.textbox}
        label='Written Details'
        onChangeText={text => addNewList(text)}
      />
      <h2>Expense Amount</h2>
      <TextInput
        style={styles.textbox}
        label="Expense Amount"
        onChangeText={text => addNewValue(parseInt(text))}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => setBalance(balance + newValue)}
          title="Income"
        />
        <Button
          onPress={() => setBalance(balance - newValue)}
          title="Expense"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
