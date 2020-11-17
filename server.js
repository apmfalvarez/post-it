const express = require('express');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(errorhandler());

const apiRouter = require('./api/api');
app.use('/api', apiRouter);


app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app;
