const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const fbApi = require('./routes/fbApiRoutes')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use(fbApi)

app.listen(PORT)

