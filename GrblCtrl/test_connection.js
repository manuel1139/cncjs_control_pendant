const { MockBinding } = require('@serialport/binding-mock')
const { SerialPortStream } = require('@serialport/stream')

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
 const port = new SerialPortStream({ binding: MockBinding, path: '/dev/ROBOT', baudRate: 14400 })


// wait for port to open...
port.on('open', () => {
  // ...then test by simulating incoming data
  var keys = [1,0,0,0,0,0,0,0];
  port.port.emitData(Buffer.from(keys));
  var keys = [0,0,0,0,0,0,0,0];
  port.port.emitData(Buffer.from(keys));

})
 
exports.Port = port;

  