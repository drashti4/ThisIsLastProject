var mysql = require('mysql');

var con = mysql.createConnection({
    host: "107.180.6.52",
    database: "isiconnect",
    user: "isiuser",
    password: "root1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = {
    getUsers: (request, response) => {
        con.query("SELECT * FROM customers")
            .then(result => response.status(200).json(result.rows))
            .catch(e => console.error(e.stack))
    }
}
