const express = require('express');

const v1apiRouter = require('./v1/index');

const router = express.Router();

router.use('/v1', v1apiRouter);


module.exports = router;