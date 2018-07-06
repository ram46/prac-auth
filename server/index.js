var express = require('express')
var app = express()
var path = require('path')
var util = require('./auth.js')
var session = require('express-session')


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto', maxAge: 60000}
}))


function restrict(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    req.session.error = 'denied access',
    res.redirect(302, '/login')
  }
}

// app.use('/static', express.static(path.join(__dirname, 'client/dist')))

app.get('/login', (req, res) => {
  res.sendFile('/Users/khiz/Developments/repos/prac-auth/client/dist/login.html')
})

// homepage is protected asset
app.get('/', restrict, (req, res) => {
  res.send('Hello ' + req.session.user + '! <a href="/logout"> click to logout </a>');
})



// Works but inefficient way!
// app.get('/', (req, res) => {
//   var sessionExists = util.checkSessionExists(req);
//   if (!sessionExists) {
//     res.redirect(302, '/login');
//   }
//   if (sessionExists) {
//     // res.send(`Hello, ${req.body.user}`);
//     res.sendFile('/Users/khiz/Developments/repos/prac-auth/client/dist/index.html')
//   }
// })


app.post('/login', (req, res) => {
 util.checkUserExists(req.body.user, (userExists) => {
    if (userExists) {
      console.log('USER EXISTS')
       util.checkValidCreds(req.body.user, req.body.password, (validUser) => {
          if (validUser) {
            console.log('VALID USER');
            req.session.user = req.body.user;
            res.redirect(302, '/');
          } else {
            res.send('wrong username or password')
          }
       });
    } else {
      res.redirect(302, '/signup');
    }
  });
});

app.get('/signup', (req, res) => {
  res.sendFile('/Users/khiz/Developments/repos/prac-auth/client/dist/signup.html')
})


app.post('/signup', (req, res) => {
  util.registerUser(req.body.user, req.body.password, (result) => {

    req.session.user = req.body.user;
    res.redirect(302, '/');
  })
})


app.get('/logout', (req, res) => {
  util.deleteSession(req, (result) => {
    res.send(result)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))




