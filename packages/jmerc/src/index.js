// index.js
require('dotenv').config();
require('reflect-metadata');

const Client = require('./api/client');
const TurnsAPI = require('./api/turns');
const TownsAPI = require('./api/towns');

module.exports = {
    Client,
    TurnsAPI,
    TownsAPI
};

