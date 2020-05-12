const express = require("express");
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');


router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.get('/sign-out', userController.destroySession);

router.post('/create', userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);



module.exports = router;
