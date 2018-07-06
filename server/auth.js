
var db = require('../database/helper.js');

module.exports = {

  checkSessionExists: function(req) {
    console.log('inside checksessionExist',req.session.user)
    return req.session ? true : false;
  },


  checkUserExists: function(username, cb) {
    db.findUser(username, (result) => {
      if (result) {
        cb(true);
      } else {
        cb(false);
      }
    })
  },


  checkValidCreds: function(username, password, cb) {
    db.validateUser(username, password, (result) => {
      cb(result);
    })
  },

  registerUser: function(username, password, cb) {
    db.createUser(username, password, (result) => {
      cb(result);
    })
  },


  deleteSession: function(req, cb) {
    req.session.destroy(function(err) {
      if (err) console.log(err);
      cb('logged out!');
    })
  }
}