import React, { Component } from 'react';
let base64 = require('base-64');
import {config} from '../credentials/env';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ServiceNowList extends Component {
 
  OpenServiceNowForm = () =>
  {
     this.props.navigation.navigate('ServiceNowForm');   
  }
 
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",  
                backgroundColor: "#000",  
            }}  
        />  
    );  
};  
//handling onPress action  
getListViewItem = (item) => {  
    Alert.alert(
      "description : "+item.description
    );  
}

componentDidMount(){
  let url = 'https://'+config.INSTANCE+'.service-now.com/api/now/table/'+config.TABLE_API_NAME;
  let username = config.USERNAME;
  let password = config.PASSWORD;
  let headers = {}
  headers['Authorization'] =  'Basic ' + base64.encode(username + ":" + password);
  fetch(url,
    { 
      method:'GET',
      headers: headers,
    }
  )
  .then(response => response.json())
  .then((responseJson) => {
      console.log(responseJson)
      this.setState({
          loading: false,
          dataSource: responseJson.result
      })
  })
  .catch(error => console.log(error))
}

render() {
  
  if(this.state.loading){
    return(  
            <Text>Data is loading...</Text>  
    )
  }
  else{
    return (   
        <View style={styles.container}>  
            <FlatList  
                data={this.state.dataSource}  
                renderItem={({item}) => 
                <View>
                    <Text style={styles.item}  
                          onPress={this.getListViewItem.bind(this, item)}>{item.description}</Text>
                    <View style={styles.datacontainer}> 
                    <Text style={styles.smalltext}  
                          onPress={this.getListViewItem.bind(this, item)}>{"Ticket No. "+item.number}</Text>
                    <Text style={styles.smalltext}  
                          onPress={this.getListViewItem.bind(this, item)}>{"Created by "+item.sys_created_by}</Text>   
                    </View>
                </View> }  
                ItemSeparatorComponent={this.renderSeparator}  
            />
            <TouchableOpacity
             onPress = { this.OpenServiceNowForm }>
             <Text style={styles.button}>
              {"Post a new Ticket"} 
             </Text>
              </TouchableOpacity>  
        </View>  
    ); 
  }  
}
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 5,  
      fontSize: 18,  
      height: 34,
      marginLeft:5  
  },
  smalltext: {  
    padding: 5,  
    fontSize: 13,  
    height: 30,
    marginLeft:5  
  },
  datacontainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    display:"flex",
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    fontSize: 16,
    backgroundColor: "#4CAF50",
    color:"white",
    alignContent:"center",
    textAlign:"center"
    
  }
})  

export default ServiceNowList