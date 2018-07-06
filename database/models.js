const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  storage: '/Users/khiz/Developments/repos/prac-auth/database/users.sqlite'

});


const User = sequelize.define('user', {
  username: {type: Sequelize.STRING, unique: true},
  password: Sequelize.STRING
});


User.sync({}).then(() => {
  // Table created
});


module.exports = {
  sequelize: sequelize,
  User: User
}


