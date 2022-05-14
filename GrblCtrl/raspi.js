#!/usr/bin/env node

const { Port } = require("./spi_connection");
const { GRBLController } = require('./grbl-controller');
const CNCJSSocket  = require('./cncjs-socket');

GRBLController(Port, CNCJSSocket);

