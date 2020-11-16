const express = require('express');
const apiRouter = express.Router();
const postsRouter = require('./posts');

apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;
