var connection = require("./connection.js");


// //unused DBQuery fuctuon usning promises
// function dbQuery(sql, inputs) {
//   return new Promise((resolve, reject) => {
//     const query = connection.query(sql, inputs, (err, res) => {
//       if (err) reject(err, res);
//       resolve(res);
//     });

//     console.log(query.sql);
//   });
// }

//ORM for selectALL
// let selectAll = {
//     selectAll: function(table) {
//         var queryString = `SELECT * FROM ${table}`;
//         return connection.query(queryString);
//     }
// }

const selectAll = (table) => {
        var queryString = `SELECT * FROM ${table}`;
        return connection.query(queryString);
}


//ORM for selectOne
const insertOne = (table, column, value) => {
    console.log(`(${value})`)
        var queryString = `INSERT INTO ${table} (${column.toString()}) VALUES ($1,$2)`;
        console.log(queryString)
    
        return connection.query(queryString, [value.toString(),'n']);
}


//ORM for UpdateOne
const updateOne = (table, column, columnVal, id) =>{
    console.log(id);
    console.log(columnVal);
    var queryString = `UPDATE  ${table} SET ${column} = $1 WHERE id = $2`;
    console.log(queryString);
       
    return connection.query(queryString, [columnVal, id]);
}

//ORM for UpdateOne
const deleteOne = (table, id) =>{
    console.log(id);
    var queryString = `DELETE FROM  ${table} WHERE id = $1`;
    console.log(queryString);
       
    return connection.query(queryString, [id]);
}

// // Object Relational Mapper (ORM)
var orm = {
     selectAll,
     insertOne,
     updateOne,
     deleteOne
  };


module.exports = orm;