const express       = require('express');
const app           = express();
const port          = process.env.PORT || 3001;
const mongoose      = require('mongoose');
const Bug           = require('./api/models/bugModel');
const bodyParser    = require('body-parser');
const cors          = require('cors');

mongoosePromise = global.Promise;
mongoose.connect('mongodb://localhost/Bugdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const routes = require('./api/routes/bugRoutes');
routes(app);

app.listen(port);

app.use((req, res) => {

});

console.log(`REST API Server started: http://localhost:${port}`);