const pg = require('pg');

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
 
module.exports = connection;