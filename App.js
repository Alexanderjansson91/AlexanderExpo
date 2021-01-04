import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, TextInput, View } from 'react-native';
import Header from './src/component/header'

export default function App() {
  return (
    <View style={styles.topContainer}>
      <Header headerText="Hello!" infoText="this is my first React Native Expo App" />
      <View style={styles.ViewContainer}>
        <Text style={styles.infoText}>My goals for this course</Text>
        <TextInput style={styles.inputTextfield}>
        </TextInput>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  topContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  ViewContainer: {
    backgroundColor: '#D3D3D3',
    flex: 1
  },
  inputTextfield: {
    backgroundColor: '#ffffff',
    height:100,
    width:350,
    borderRadius:10,
    marginLeft: 20,
    marginTop:20, 
  },

  infoText: {
    marginLeft: 20,
    marginTop:40,
    
  },

});
