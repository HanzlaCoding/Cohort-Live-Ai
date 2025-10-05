const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);
