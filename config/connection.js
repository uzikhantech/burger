const pg = require('pg');
const util = require('util');

//database connection properties
const connection  = new pg.Client({
    user: 'postgres',
    host: 'psqldatabase',
    database: 'burger_db',
    password: 'postgres',
    port: 5432,
});


connection.connect((err) => {
    if (err) {
        throw err;
     }
     console.log("Connection Succesful...");
});
 
connection.query = util.promisify(connection.query);

module.exports = connection;