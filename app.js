const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  server.use(helmet());
  server.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  server.use(
    bodyParser.json({
      limit: "5mb"
    })
  );

  server.get("*", (req, res) => handle(req, res));

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
