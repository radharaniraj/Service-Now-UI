import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import * as Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
let base64 = require('base-64');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create Service Now Tickets</Text>
        <Formik
          initialValues={{ Description: ''}}
          validationSchema={Yup.object({
            Description: Yup.string()              
              .required('Required')
          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
              const ds = values.Description
              let url = 'https://dev64765.service-now.com/api/now/table/x_514301_shubhamap_shubhamtable';
      let username = 'admin';
      let password = 'Shubham123';
       let headers = {}
  headers['Authorization'] =  'Basic ' + base64.encode(username + ":" + password);
  headers['Content-Type'] = 'application/json;charset=UTF-8';

      let data = {
        'description': ds
      }
      fetch(url, {method:'POST',
         headers: headers,
         body: JSON.stringify(data)
      })
      .then(response => {
         console.log(response.status)
         if(response.status==201)
        {
            Alert.alert("Ticket created "+ds)
        }
        else{
          Alert.alert("error occurred")
        }
    })
    .catch(error => console.log(error))
              // Important: Make sure to setSubmitting to false so our loading indicator
              // goes away.
              formikActions.setSubmitting(false);
            }, 500);
          }}>
          {props => (
            <View>
             <TextInput
                onChangeText={props.handleChange('Description')}
                onBlur={props.handleBlur('Description')}
                
                value={props.values.Description}
                autoFocus
                placeholder="Write your Description Here"
                multiline={true}
                style={styles.input}
                
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                
                }}
              />
              {props.touched.Description && props.errors.Description ? (
                <Text style={styles.error}>{props.errors.Description}</Text>
              ) : null}
           
              <Button
                onPress={props.handleSubmit}
                color="black"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}>
                Submit
              </Button>
              <Button
                onPress={props.handleReset}
                color="black"
                mode="outlined"
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}>
                Reset
              </Button>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#d3d3d3',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    fontSize:20,
    display:"flex",
    textAlignVertical: "top",
    height: 250,
    paddingHorizontal: 10,
    width: '100%',
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
});
