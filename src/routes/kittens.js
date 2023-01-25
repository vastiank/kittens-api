const { Router } = require("express");
const router = Router();
const { getKittens } = require('../controllers/kittens');

router.get('/', getKittens);

module.exports = router;

