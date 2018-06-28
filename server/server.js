const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB'),
mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
});

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB).then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );

const postroutes = require('./routes/PostRoute');

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/posts', postroutes);

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});