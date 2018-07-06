var express = require('express')
var app = express()
var path = require('path')
var session = require('express-session')
var bodyParser = require('body-parser');

var db = require('../database/helper.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.set('views', __dirname + '/../client/src/components/');
// app.set('view engine', 'jsx');

// var options = { beautify: true, transformViews:true };

// app.engine('jsx', require('express-react-views').createEngine(options));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: 'auto', maxAge: 60000}
// }))


app.get('/test', (req, res) => {
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))



