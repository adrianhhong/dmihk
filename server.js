var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/src/main.js');
// });

io.on("connection", socket => {
  console.log("a user connected");

  socket.emit("customEmit", "Hey!");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
