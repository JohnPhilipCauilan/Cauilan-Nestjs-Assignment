const express = require('express');
const router = express.Router();
const AssignmentController = require('../controller/ass1controller');  


router.use('/assignments', AssignmentController);

module.exports = router;  
