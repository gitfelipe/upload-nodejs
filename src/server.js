const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express());
app.use(routes);

app.listen(3333);
