const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);
router.get('/back',homeController.back);
// router.get('/reminder',homeController.reminder);
router.use('/users', require('./users'));
router.use('/playground',require('./playground'));


module.exports = router;