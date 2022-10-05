const { Server } = require("ws");
const wss = new Server({
  port: 5000,
});

wss.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log(msg.toString());
    ws.send("POC: " + msg.toString());
  });
  ws.on("error", (err) => {});
  ws.on("close", () => {});
});
wss.on("close", function close() {});
console.log("wss up");
