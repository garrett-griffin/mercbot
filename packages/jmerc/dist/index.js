"use strict";

// index.js
require('dotenv').config();
require('reflect-metadata');
var Client = require('./api/client');
var TurnsAPI = require('./api/turns');
var TownsAPI = require('./api/towns');
module.exports = {
  Client: Client,
  TurnsAPI: TurnsAPI,
  TownsAPI: TownsAPI
};