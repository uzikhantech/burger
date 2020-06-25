const orm = require("../config/orm");

//THE FOLLOWING ARE DATABASE FUNCTIONS FOR CONTROLLERS//

//the selectAll controller
let selectAll = {
    selectAll: (callback) => {
        orm.selectAll("burger", (res) => {
          callback(res);
        });
    }
};

//the selectOne controller
let selectOne = {
    selectOne: (cols, vals, callback) =>{
        orm.selectOne("burger", cols, vals, (res) => {
          callback(res);
        });
    }
};

//the updateOne controller
let updateOne = {
    updateOne: (objColVals, condition, callback) => {
        orm.updateOne("burger", objColVals, condition, (res) => {
          callback(res);
        });
      }
}

//burger is list orm db functions
let burger= {
    selectAll,
    selectOne,
    updateOne
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;