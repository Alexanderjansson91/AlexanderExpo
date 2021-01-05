import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const Header = (props)=> {
    const {textContainer, viewContainer, infoText} = styles;
    return(
        <View style={viewContainer}>
            <Text style={textContainer}>
                {props.headerText}
            </Text>
            <Text style={infoText}>
                {props.infoText}
            </Text>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#800080'
    },
    textContainer:{
        fontSize:30,
        marginTop: 60, 
        marginLeft: 20,
        color:"#ffffff",
    },
    infoText:{
        fontSize:15,
        marginTop: 10, 
        marginLeft: 20,
        color:"#ffffff",
        marginBottom: 40, 
    },

});

export default Header;