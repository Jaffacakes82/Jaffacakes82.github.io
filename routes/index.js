"use strict";
var express = require('express');
var request = require('request');
var router = express.Router();

var apiKey = "AIzaSyC6OiX-bH7swGUX-gm1KzxTotrwe1p6hz8";

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'URL Shortener'
    });
});

router.post('/', function (req, res) {
    var originalUrl = req.body.originalUrl,
        returnVal = {
            success: false,
            value: 'Sorry, that didn\'t work! Did you enter a valid URL?',
            title: 'URL Shortener'
        };

    console.warn(req.body);

    var apiUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=' + apiKey,
        requestOptions = {
            headers: {
                'content-type': 'application/json'
            },
            uri: apiUrl,
            method: 'POST',
            json: {
                'longUrl': originalUrl
            }
        };

    request(requestOptions, function (err, httpResponse, body) {
        if (err) {
            console.warn('API call failed.')
            console.warn(err);
            res.render('index', returnVal);
            res.end();
        }

        console.warn(body);

        returnVal.success = true;
        returnVal.value = body.id;

        res.render('index', returnVal);
    })
});

module.exports = router;