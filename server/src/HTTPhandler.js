const db = require('../database/database');

function getUsers(request,response){
    db.getUsers(request, response);
}
function isValidUser(request, response){
    db.isValidUser(request, response)
}
module.exports = {
    getUsers,
    isValidUser
};
