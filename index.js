const express = require("express");
const morgan = require("morgan");
const loginRouter = require("./routes/loginRouter");
const accountRouter = require("./routes/accountRouter");
const cartRouter = require("./routes/cartRouter");
const confirmRouter = require("./routes/confirmRouter");
const restaurantRouter = require("./routes/restaurantRouter");

const hostname = "localhost";
const port = 8080;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/account", accountRouter);
// app.use("/login", loginRouter);
// app.use("/cart", cartRouter);
// app.use("/order", confirmRouter);
// app.use("/restaurant", restaurantRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
