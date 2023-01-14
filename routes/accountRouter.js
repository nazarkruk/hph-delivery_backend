const express = require("express");
const accountRouter = express.Router();

accountRouter
  .route("/account")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will get user info, when signed in");
  })
  .post((req, res) => {
    res.end(`New user signup: ${req.body.name}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("Edit user info");
  })
  .delete((req, res) => {
    res.end("Deleting an account");
  });

accountRouter
  .route("/:userName")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the user: ${req.params.userName} to you`);
  })
  .put((req, res) => {
    res.write(`Updating user: ${req.params.userName}\n`);
    res.end(`Will update the user: ${req.body.name}`);
  })
  .delete((req, res) => {
    res.end(`Deleting account: ${req.params.userName}`);
  });

module.exports = accountRouter;
