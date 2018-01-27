const express = require('express');
const todoController = require('./controller/todoController');

const app = new express();

app.set('view engine','ejs');
app.use(express.static('./public'));

todoController(app);

app.listen(3333);