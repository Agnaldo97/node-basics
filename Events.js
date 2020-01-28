const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a Listner
emitter.on("messageLogged", () => {
  console.log("Log Emitter called");
});

//Raise an Event
emitter.emit("messageLogged");
