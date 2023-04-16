const express = require("express");
const app = express();
const cors = require("cors");
const indexRoutes = require("./src/routes/index");
const { PORT } = require("./bin/config");

const server = require("http").createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//intialize all routes
indexRoutes(app);

const port = process.env.PORT || PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
