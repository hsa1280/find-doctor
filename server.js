var express = require('express');
var app = express();
var request = require('request');
var port = process.env.PORT || 3000;

app.use(express.static('src'));
var user_key = '250f9787ed29c12f6e22efb1114020e8';
var host = 'https://api.betterdoctor.com';

function performRequest(endpoint, method, data, successCB, errorCB) {
    var options = {
        headers: {
            'Content-Type': 'application/json'
        },
        url: host + endpoint,
        method: method,
        json: true,
        body: data
    };

    request(options, function (error, response, body) {
        if (!error && (response.statusCode >= 200 && response.statusCode <= 204) ){
            successCB(response.body);
        } else {
            errorCB(response);
        }
    });
}

app.get('/doctorList', function(req, res) {
    var url = '/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + user_key;
    performRequest(url, 'GET', {}, function(response) {
        // console.log(response);
        res.send(response);
    }, function(error) {
        console.log('Error occurred in getting users', error)
        res.status(400).send(error);
    });
});

app.get('/doctorDetail', function(req, res) {
    var doctorId = req.query.doctorId;
    var url = `/2016-03-01/doctors/${doctorId}?user_key=${user_key}`;
    performRequest(url, 'GET', {}, function(response) {
        // console.log(response);
        res.send(response);
    }, function(error) {
        console.log('Error occurred in getting users', error)
        res.status(400).send(error);
    });
});

app.get('/similarDoctorList', function(req, res) {
    var practiceUid = req.query.practiceUid;
    var url = `/2016-03-01/practices/${practiceUid}/doctors?skip=0&limit=10&user_key=${user_key}`
    performRequest(url, 'GET', {}, function(response) {
        // console.log(response);
        res.send(response);
    }, function(error) {
        console.log('Error occurred in getting users', error)
        res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log('App is listening to port ', port);
})
