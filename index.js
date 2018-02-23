const app = require("express")();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
var http = require("http").Server(app);
//const db = require("./config/db");
const io = require("socket.io")(http);
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("WELCOME!");
});
http.listen(port, () => {
  console.log("Server start on" + port);
});
// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err);
//   const db = database;
//   require("./api")(app, db);
//   http.listen(port, () => {
//     console.log("Server start on" + port);
//   });
// });

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("message", data => console.log("message:", data));
});
