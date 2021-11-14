import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function Header() {

    const [text, onChangeText] = React.useState("");

    return (
        <>
            <TextInput
                style={styles.container}
                onChangeText={onChangeText}
                value={text}
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />


            <Text>{balance}</Text>
            <TextInput
                style={styles.textbox}
                placeholder={"Value"}
                onChangeText={onChangeText}
            />
            <Text>
                <button onClick={() => setBalance(balance + 1)}>
                    Income
                </button>
                <button onClick={() => setBalance(balance - 1)}>
                    Expense
                </button>
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

