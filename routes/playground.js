const express = require("express");
const router = express.Router();
const passport = require('passport');

const playgroundController = require('../controllers/playground_controller');


router.get('/',passport.checkAuthentication ,playgroundController.start);

router.get('/try-next-level' ,playgroundController.unavail);



module.exports = router;
