const orm = require("../config/orm");

//THE FOLLOWING ARE DATABASE FUNCTIONS FOR CONTROLLERS//

//the selectAll controller
const selectAll = () => {
    return orm.selectAll("burgers");
    };

//the selectOne controller
const insertOne = (cols, vals, ) =>{
    return orm.insertOne("burgers", cols, vals);
};

//the updateOne controller
const updateOne = (columnVal, id) => {
    return  orm.updateOne("burgers", 'devoured', columnVal, id);
};

const deleteOne = (id) => {
    return orm.deleteOne('burger',id);

}

//burger is list orm db functions
let burger= {
    selectAll,
    insertOne,
    updateOne,
    deleteOne
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;