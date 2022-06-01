const  ByteLengthParser  = require('@serialport/parser-byte-length');
const { KeyMappings } = require('./key_mappings');

var blp = new ByteLengthParser({length: 8});
var options = {};
var move = "0.1";

function cb() {
    console.log("callback");
}


exports.GRBLController = function(Port, cncJsConn) { 
   Port.on('data', ctrlData => {
//        console.log(ctrlData);

        var keys = ctrlData[2];
    
        if (keys != 0) {
            var command = KeyMappings[keys];
            if (command.type == 1) {
                socket.emit(command.cmd, options.port, 'gcode', command.gc + move);
            } else {
                socket.emit(command.cmd, options.port, command.gc);
            }
           console.log(command);
        }    
    })

    cncJsConn(options, function(err, cb) {
        socket.on('Grbl:state', function(state) {
//            store.controller.state = state;
	    console.log(state);
        });
    })
}




