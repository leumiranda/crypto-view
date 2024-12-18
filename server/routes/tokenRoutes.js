const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.post('/token/balance', tokenController.getTokenBalance);

module.exports = router;
