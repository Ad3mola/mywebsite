const psql = require('psql');
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/courses', (req, res) => {
    res.send('this is courses page');
})

app.listen(3000);
console.log('running on port 3000...');