const express = require("express");
const router = express.Router();

const playgroundController = require('../controllers/playground_controller');


router.get('/',playgroundController.start);



module.exports = router;
