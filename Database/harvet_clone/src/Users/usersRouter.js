const express = require("express");
const usersModel = require("./usersModel");

const app = express.Router();

app.post("/login", async (req, res) => {
  let { email, password } = await req.body;

  try {
    let user = await usersModel.findOne({ email, password });
    if (!user) {
      res.status(401).send("Authentication failed!");
    } else {
      res.send({ token: `${Math.random() * 10000}:${user.id}:${user.email}:${Math.random() * 10000}:${Math.random() * 10000}` });
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  let { email } = await req.body;

  try {
    let user = await usersModel.findOne({ email });

    if (user) {
      res.status(401).send("Email is already exists");
    } else {
      let newUser = await usersModel.create(req.body);
      let token = `${newUser.email}:${newUser.id}:${Math.random() * 10000}`;
      res.send({ token });
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
