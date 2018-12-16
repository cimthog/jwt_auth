const express = require('express')
app = express()
bodyParser = require('body-parser')
mongoose = require('mongoose')
auth = require('./routes/aRoute')
user = require('./routes/uRoute')
index = require('./routes/index')
path = require('path')
responseTime = require('response-time');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/my_db");
mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.on('connected', () => console.log("Successfully connected to database"));
connection.on('err', () => console.log("Failed to connect to db"));


app.use(responseTime());

app.use( express.static(path.join(__dirname,'/public')));

app.use('/login',auth)
app.use('/user',user)
app.use('/dashboard',index)


const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});