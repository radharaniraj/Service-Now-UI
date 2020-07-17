import React, { Component } from 'react'
let base64 = require('base-64')
import {config} from '../credential/env';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'

class ServiseNowForm extends Component {
   state = {
      Description: ''
   }
   handleDescription = (text) => {
      this.setState({ Description: text })
   }
   login = (Description) => {
      let url = 'https://'+config.INSTANCE+'.service-now.com/api/now/table/'+config.TABLE_API_NAME;
      let username = config.USERNAME;
      let password = config.PASSWORD;
      let headers = new Headers();
    
    let data = {
        'description': Description
    }
    console.log(data)
  
  //headers.append('Content-Type', 'text/json');
  headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
  headers.append('Content-Type', 'application/json;charset=UTF-8') 
  fetch(url, {method:'POST',
    headers: headers,
    body: JSON.stringify(data)
   })
    .then(response => {
        console.log(response.status)
        if(response.status==201)
        {
            Alert.alert("Ticket created "+Description)
        }
    })
    .catch(error => console.log(error))
      
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
            value = {this.state.value}
            onChangeText={text=>this.setState({value:text})}
               underlineColorAndroid = "transparent"
               placeholder = "Write The Description Of Your Tickets"
               placeholderTextColor = "#FFFFFF"
               multiline={true}
               
               autoCapitalize = "none"
               onChangeText = {this.handleDescription}/>
            
            <TouchableOpacity
               style = {styles.button}
               onPress = {
                  () => this.login(this.state.Description)
               }>
               <Text style = {styles.buttonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default ServiseNowForm

const styles = StyleSheet.create({
   container: {
      paddingTop: 13,
      backgroundColor:'#454545',
      flex:1
   },
   
   input: {
      margin: 20,
      height: 1,
      borderColor: '#454545',
      borderWidth: 3,
      backgroundColor:'#999999',
      flex:5,
   padding:10,
      fontSize:25,
      borderRadius:20
   },
   buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

})