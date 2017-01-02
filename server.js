const http = require('http');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var results = [];

app.get('/', function(req, res) {
    res.json(results);
});

app.listen(8888, function() {
    getMoments();
});

// Get Moment List for 100
function getMoments(momentids) {
    for (var i = 0; i < 99; i++) {
        var formData = {
            form: {
                momentids: parseInt(6520300 + i)//6520365//'6473226'
            }
        };
        request.post('https://m.immomo.com/inc/moment/share/getMoments', formData, function(err, httpResponse, body) {
            results.push(body);
        });
    }
}

// Get a moment by momentids
// function getMoments(momentids) {
//     var formData = {
//         form: {
//             momentids: momentids//'6473226'
//         }
//     };
//     request.post('https://m.immomo.com/inc/moment/share/getMoments', formData, function(err, httpResponse, body) {
//         return body;
//     });
// }