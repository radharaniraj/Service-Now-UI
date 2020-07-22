import {config} from "../credentials/env";
let base64 = require('base-64');

export const getTicketApi = async () => {

    let url = 'https://' + config.INSTANCE + '.service-now.com/api/now/table/' + config.TABLE_API_NAME;
    let username = config.USERNAME;
    let password = config.PASSWORD;
    let headers = {}
    headers['Authorization'] = 'Basic ' + base64.encode(username + ":" + password);
    return await fetch(url,
        {
            method: 'GET',
            headers: headers,
        }
    ).then(
        res => {
            return res.json();
        }
        );
};
