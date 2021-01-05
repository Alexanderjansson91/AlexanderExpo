import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button } from 'react-native';
import Header from './src/component/header'



export default function App() {

  var textInputValue = "";

  //Handle onpress on my Button
  const handlePress = () => console.log(textInputValue)

  //Handle inputvalue in Textfield.
  const handleChangeText = (textValue) => {
    textInputValue = textValue
    console.log(textInputValue)
  }

  return (
    <View style={styles.topContainer}>
      <Header headerText="Hello!" infoText="this is my first React Native Expo App" />
      <View style={styles.ViewContainer}>
        <Text style={styles.infoText}>My goals for this course</Text>
        <TextInput
          style={styles.myGoalsInputTextfield}
          placeholder="Initial Text"
          multiline={true}
          onChangeText={handleChangeText}
        >
        </TextInput>
        <View style={styles.submitButton}>
          <Button
            color='#ffffff'
            title="Submit"
            onPress={handlePress}
          >
          </Button>
        </View>
        <Text style={styles.infoText}>My feeling for this course.</Text>
        <View style={styles.imageView}>
          <Image
            style={styles.iconView}
            source={require('./assets/emojismiley.png')}
          />
        </View>
      </View>
    </View>
  );
}


//Styles For my App
const styles = StyleSheet.create({

  topContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  imageView: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  ViewContainer: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  iconView: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    marginLeft: 20,
    marginTop: 30,

  },

  submitButton: {
    elevation: 8,
    backgroundColor: "#800080",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 12,
    width: 150,
    marginLeft: 20,
    marginTop: 20,
  },

  myGoalsInputTextfield: {
    backgroundColor: '#ffffff',
    height: 80,
    borderColor: '#800080',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 375,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,

  },

  infoText: {
    marginLeft: 20,
    marginTop: 40,

  },

});
