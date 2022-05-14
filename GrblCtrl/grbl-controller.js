const  ByteLengthParser  = require('@serialport/parser-byte-length');
const { keyMapping } = require('./key_mapping');

var blp = new ByteLengthParser({length: 8});
var options = {};

function cb() {
    console.log("callback");
}

exports.GRBLController = function(Port, cncJsConn) {

  
   Port.on('data', ctrlData => {
//        console.log(ctrlData);

        var keys = ctrlData[2];
    
        if (keys != 0) {
            var command = keyMapping[keys];
            socket.emit('command', options.port, command);
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
