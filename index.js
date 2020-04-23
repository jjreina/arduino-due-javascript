const {Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    console.log("Ready event. Repl instance auto-initialized!");
  
    const led = new Led(13);
    
    board.repl.inject({
      on: () => {
        console.log('Led ON');
        led.on();
      },
      off: () => {
        console.log('Led OFF');
        led.off();
      },
      blink: () => {
        console.log('Led Blinking');
        led.blink()
      },
      stop: () => {
        console.log('Led stop Blinking');
        led.stop();
      },
      toggle: () => {
        console.log('Led toggle');
        led.toggle();
      }
    });
  });
