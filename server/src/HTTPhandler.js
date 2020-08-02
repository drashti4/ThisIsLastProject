const db = require('../database/database');

function getUsers(request,response){
    db.getUsers(request, response);
}

module.exports = {
    getUsers
};
