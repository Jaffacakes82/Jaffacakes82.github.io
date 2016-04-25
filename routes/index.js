"use strict";
var express = require('express');
var request = require('request');
var router = express.Router();

var apiKey = "831180a8956f960b65e1cdfd1437b0c35a98439e";

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'URL Shortener'
    });
});

router.post('/', function (req, res) {
    var originalUrl = req.body.chosenProtocol + req.body.originalUrl,
        returnVal = {
            success: false,
            value: 'Sorry, that didn\'t work! Did you enter a valid URL?',
            title: 'URL Shortener'
        };


    if (req.body.originalUrl != '') {


        var apiUrl = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + apiKey + '&longUrl=' + originalUrl,
            requestOptions = {
                uri: apiUrl,
                method: 'GET'
            };

        request(requestOptions, function (err, httpResponse, body) {
            if (err) {
                console.warn('API call failed.')
                console.warn(err);
                res.render('index', returnVal);
                res.end();
            }

            returnVal.success = true;

            var responseObject = JSON.parse(body);

            returnVal.value = responseObject.data.url;

            res.render('index', returnVal);
        })
    } else {
        console.log('No URI provided');
        returnVal.value = 'Stop trying to do the impossible...'
        res.render('index', returnVal);
        res.end();
    }
});

module.exports = router;