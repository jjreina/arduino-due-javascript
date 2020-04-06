const {Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    console.log('Hello world from arduino due');
    const led = new Led(13);

    setInterval(() => {
        led.off()
        setTimeout(() => {
            led.on() 
        }, 1000);
    }, 4000);
});
