const express = require("express");
const router = express.Router();
const passport = require('passport');

const playgroundController = require('../controllers/playground_controller');


router.get('/',passport.checkAuthentication ,playgroundController.start);



module.exports = router;
