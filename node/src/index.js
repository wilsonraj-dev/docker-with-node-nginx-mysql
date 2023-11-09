const path = require("path");
const express = require('express');
const config = require('./config');
const insertPeople = require('./insert-peoples');
const selectPeoples = require('./select-peoples');

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', async (_, res) => {
  await insertPeople();
  const peoples = await selectPeoples();
   res.render('index', { peoples });
});

app.listen(config.PORT);