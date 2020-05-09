const express = require("express");
const router = express.Router();

const userController = require('../controllers/user_controller');


router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
// router.get('/sign-out', userController.destroySession);

// router.post('/create', userController.create);


module.exports = router;
