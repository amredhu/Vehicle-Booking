import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component<Props> {
    
    
    render() {
      return (
          <View style={styles.container}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={this.props.holdertype}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={this.props.passwordholdertype}
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              ref={(input) => this.password =input} />

              <TouchableOpacity onPress={this.Details} style={styles.button}>
                  <Text style={styles.buttonText}>{this.props.type}</Text>
              </TouchableOpacity>
          </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:"#ffffff",
        marginVertical:10
    },

    button:{
        width:200,
        backgroundColor:'#1a0000',
        borderRadius: 25,
        marginVertical:10,
        paddingVertical:10
    },

    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});
