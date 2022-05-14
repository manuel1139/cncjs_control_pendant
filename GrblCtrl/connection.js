
const  SerialPort  = require('serialport');
//SerialPort.list().then(function(v) { console.log(v)}) ;

showPortOpen = function() {
    console.log("open");
    port.on('data', function(v) { console.log(v)});
}

let port = new SerialPort(  "/dev/ttyUSB0", { baudRate: 115200 });


//const parser = port.pipe(new ByteLengthParser({ length: 8 }))
//parser.on('data', console.log) // will have 8 bytes per data event

//myPort.on('open', showPortOpen);

exports.Port = port;

  


