const app = require("./src/app");
require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateMessage = require("./src/services/ai.service");

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected!");

  socket.on("disconnect", () => {
    console.log("user is disconnected!");
  });

  socket.on("message", async (message) => {

    const response = await generateMessage(message);
    socket.emit("response", response);
    console.log(response);
    
  });
});

httpServer.listen(3000);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
