var mysql = require('mysql');

var con = mysql.createConnection({
    host: "107.180.6.52",
    database: "isiconnect",
    user: "isiuser",
    password: "root1"
});

/*con.connect(function(err) {
   // if (err) throw err;
    console.log("Connected!");
});*/


module.exports = {
    getUsers: (request, response) => {
        con.connect(function (err) {
            con.query("SELECT * FROM users", function (err, result, fields) {
                console.log(result);
            });
        });
    },
    isValidUser: (request, response) => {
        let flag = false;
        con.connect(function (err) {
            con.query("SELECT * FROM users", function (err, result, fields) {
                if (result.length > 0) {
                    if (result) {
                        if (err) throw err;
                        Object.keys(result).forEach(function (key) {
                            let row = result[key];
                            if (row.email === request.query.email && row.password === request.query.pwd) {
                                flag = true;
                                console.log("Flag is true")
                            }
                        });
                    }
                }
                if (flag) {
                    response.status(200).json({
                        msg: 'valid user'
                    })
                } else {
                    response.status(201).json({
                        msg: 'Invalid user'
                    })
                }

            });
        });
    }
};


