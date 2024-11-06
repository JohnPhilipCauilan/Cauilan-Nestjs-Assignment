const express = require('express');
const router = express.Router();
const AssignmentController = require('../controller/ass1controller');

router.get('/assignments/fibonacci/:n', AssignmentController.fibonacci);

module.exports = router;