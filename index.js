const {Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    console.log("Ready event. Repl instance auto-initialized!");
  
    const led = new Led(13);
    
    board.repl.inject({
      on: () => {
        console.log('Led ON');
        led.stop();
        led.on();
      },
      off: () => {
        led.stop();
        console.log('Led OFF');
        led.off();
      },
      blink: () => {
        console.log('Led Blink');
        led.blink()
      }
    });
  });
