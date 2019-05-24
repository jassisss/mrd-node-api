
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'cgctecco_mrd',
      password : 'Jssajjmrd99-',
      database : 'cgctecco_mrd'
    }
  });

module.exports = knex;