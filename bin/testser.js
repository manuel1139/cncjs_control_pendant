#!/usr/bin/env node

var serialport = require('serialport');
var ByteLengthParser = require('@serialport/parser-byte-length');

serialport.list().then(function(v) { console.log(v)}) ;

showPortOpen = function() {
    console.log("open");
}

let port = new serialport( "/dev/ttyUSB0", { baudRate: 115200 } );


const parser = port.pipe(new ByteLengthParser({ length: 8 }))
parser.on('data', console.log) // will have 8 bytes per data event

//myPort.on('open', showPortOpen);


//myPort.on('data', function(v) { console.log(v)});

