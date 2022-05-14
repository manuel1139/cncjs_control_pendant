const EventEmitter = require('events');
const SPI = require('pi-spi');

var spi = SPI.initialize("/dev/spidev0.1");
spi.clockSpeed(100000);


eventEmitter = new  EventEmitter();

var old_val = 0;
setInterval(function(){
/*
 b = Buffer.from("\3\0Blah0\0\0\0\0");
 spi.transfer(b,8, function (e,d) {
console.log(b);
 if ( b[2] != old_val ) {	 

 		

}
,230);
*/


    b = Buffer.from("\3\0\0\0\0\0\0\0");
   spi.transfer(b,8, function (e,data) { 
 if ( data[2] != old_val ) {	
	old_val = data[2];
	eventEmitter.emit('data', data); 
 
}
 })

},50)
exports.Port = eventEmitter;








