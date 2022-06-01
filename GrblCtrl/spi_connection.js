const EventEmitter = require('events');
const SPI = require('pi-spi');
const Gpio = require('pigpio').Gpio;

var spi = SPI.initialize("/dev/spidev0.1");

spi.clockSpeed(100000);

const button = new Gpio(25, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.FALLING_EDGE
});

eventEmitter = new  EventEmitter();

var old_val = 0;


button.on('interrupt', (level) => {
  console.log("got interrup");

  b = Buffer.from("\3\0\0\0\0\0\0\0");

  spi.transfer(b,8, function (e,data) { 
    console.log(data);

  if ( data[2] != old_val ) {	
    old_val = data[2];
    eventEmitter.emit('data', data); 
  }
  })
})

  
exports.Port = eventEmitter;
