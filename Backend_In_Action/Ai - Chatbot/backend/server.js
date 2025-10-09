const app = require("./src/app.js");
const dotenv = require("dotenv");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateMessage = require("./src/services/ai.service.js");

dotenv.config();

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("a user connected!");

  socket.on("disconnect", () => {
    console.log("user is disconnected!");
  });

  socket.on("ai-message", async (message) => {
    chatHistory.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await generateMessage(chatHistory);

    chatHistory.push({
      role: "model",
      parts: [{ text: response }],
    });

    socket.emit("ai-response", response);

    console.log(response);
    console.log(chatHistory);
  });
});

httpServer.listen(3000);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});