import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    // use <View> as a wrapper
    <View style={{padding}}>
      {/* Nesting <View> to build UI layout */}
      <View>
        <TextInput />
        <Button title="ADD" />
      </View>
      <View>
      <Button title="DELETE" />
      </View>
    </View>
  );
}

// React Native uses StyleSheets based on CSS but is not CSS
// Written in Javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
