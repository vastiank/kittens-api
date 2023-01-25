const { response } = require("express");
const kittens = require("../database/kittens.json");

const getKittens = (req, res = response) => {
  res.json({ data: kittens });
};

module.exports = {
  getKittens,
};
