var connection = require("./connection.js");

//The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
printQuestionMarks = (num) => {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  // Helper function to convert object key/value pairs to SQL syntax
 objToSql= (ob) => {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
}
  

//ORM for selectALL
let selectAll = {
    selectAll: (whatToSelect, tableInput) => {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
            if (err) {
                 throw err;
            }
            console.log(result);
         });
    }
}

//ORM for selectOne
let selectOne = {
    selectOne:(table, cols, vals, callback) => {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
        console.log(queryString);
        connection.query(queryString, vals, (err, result) =>{
          if (err) {
            throw err;
          }
    
          callback(result);
        });
    }
}

//ORM for UpdateOne
let updateOne = {
    updateOne: (table, objColVals, condition, callback) =>{
        var queryString = `UPDATE " + ${table} SET ${objToSql(objColVals)} WHERE ${contdition}`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          callback(result);
        });
    }
}

// Object Relational Mapper (ORM)
var orm = {
     selectAll,
     selectOne,
     updateOne
  };

module.exports = orm;