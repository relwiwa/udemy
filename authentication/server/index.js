const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const router = require('./router');

// DB setup

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth', {
  useMongoClient: true,
});

// App setup

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port ' + port);
