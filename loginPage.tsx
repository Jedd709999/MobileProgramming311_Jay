import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill in both fields');
      return;
    }
    setError('');
    alert(`Login successful! Email: ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#121212',
  },
  form: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    width: '90%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 45,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#333',
  },
  error: {
    color: '#f44336',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
