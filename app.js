'use strict';

process.env.DEBUG = 'actions-on-google:*';

const assistant = require('actions-on-google').ApiAiAssistant;

var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"username":"admin","password":"i-000e5b97c11d3aebf"}';

var options = {
    url: 'http://34.221.34.236/restapi/v1/login',
    method: 'POST',
    headers: headers,
    body: dataString
};

//function callback(error, response, body) {
//    if (!error && response.statusCode == 200) {
//        console.log(body);
//    }
//}

//function requestHandler (assistant) {
//    request(options, callback);
//    const msg = "AAAAA";
//    assistant.tell(msg);
//}

const actionMap = new Map();
actionMap.set(requestHandler);

assistant.handleRequest(actionMap);

