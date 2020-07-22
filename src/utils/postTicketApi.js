import {config} from "../credentials/env";
import {Alert} from "react-native";
let base64 = require('base-64');

export const postTicketApi = async (description) => {
    const ds = description;
    let url = 'https://' + config.INSTANCE + '.service-now.com/api/now/table/' + config.TABLE_API_NAME;
    let username = config.USERNAME;
    let password = config.PASSWORD;
    let headers = {};
    headers['Authorization'] =  'Basic ' + base64.encode(username + ":" + password);
    headers['Content-Type'] = 'application/json;charset=UTF-8';
    let data = {
        'description': ds
    };
    return await fetch(url, {
        method:'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return response;
    }).catch(error => {
        Alert.alert("error occurred")
        return error})
};
