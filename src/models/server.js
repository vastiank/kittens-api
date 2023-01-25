const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //public directory
    this.app.use(express.static("src/public"));
    //read and parse of body
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/kittens", require("../routes/kittens"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port", this.port);
    });
  }
}

module.exports = Server;
