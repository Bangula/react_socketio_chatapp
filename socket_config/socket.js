const socket = require("socket.io");

module.exports = server => {
  const io = socket(server);
  io.on("connection", socket => {
    console.log("Socket established");

    socket.on("chat", data => {
      io.sockets.emit("chat", data);
    });

    socket.on("typing", data => {
      socket.broadcast.emit("typing", data);
    });
  });
};
