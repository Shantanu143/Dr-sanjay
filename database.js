const mysql = require ('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    database:'spiacenteinfo',
    user:'root',
    password:''
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("connection succesful ");
    }
});

module.exports = connection ;
