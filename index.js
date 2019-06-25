const psql = require('psql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');


var connection = psql.createConnection({
    host : 'localhost',
    user : 'Ademola',
    password : 'ademola',
    database : 'api1'

});

const app = express();
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/signIn.html'));
});

app.post('/auth', function(req, res){
    var username = req.body.name;
    var password = req.body.password;
    if(username && password){
        connection.query('SELECT * FROM users WHERE = ? AND  password  = ?', [username, password], function(error, results, fields){
            if(results.length > 0){
                req.session.loggedin = true;
                req.session.username = username;
                Response.redirect('/productPage.html');
            } else {
                res.send('incorrect username and password');
            }
            res.end();
        });
    } else {
        res.send('please enter username and password');
        res.end();
    }
});

app.get('/productPage', function(req, res) {
    if (req.session.loggedin){
        res.send('Welcome back, ' + req.session.username);
    } else {
        res.send('please log in to view this page');
    }
    res.end();
});

app.listen(3000);
console.log('running on port 3000...');