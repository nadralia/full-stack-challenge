const app = require("./app");
const debug = require("debug")("express:server");
const http = require("http");
const { host, port } = require("./config");

app.set("port", port);
const server = http.createServer(app);

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
