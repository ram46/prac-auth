var connection = require('./index.js');
var bcrypt = require('bcrypt');



module.exports = {

  createUser: function(username, password, cb) {
    var hash = bcrypt.hashSync(password, 10);
    connection.User.create({username: username, password:hash}).then( () => {
      cb('done');
    })
  },


  deleteUser: function() {

  },

  findUser: function(username, cb) {
    connection.User.findOne({where: {username: username}}).then( (result) => {
      if (!result) cb(null);
      cb(true);
    })
  },

  validateUser: function(username, password, cb) {
    connection.User.findOne({where: {username: username}}).then( (result) => {
      if (!result) cb(null);
      // var hash = bcrypt.hashSync(password, 10);
      // console.log(hash, password, result.password)
      cb(bcrypt.compareSync(password, result.password)); // true);
    })
  },

  updateUser: function() {
    //change password!
  }

}