const { Port } = require("./connection");
const { GRBLController } = require('./grbl-controller');
const CNCJSSocket  = require('./cncjs-socket');

GRBLController(Port, CNCJSSocket);



