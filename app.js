const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const fbApi = require('./routes/fbApiRoutes')
const discount = require('./routes/discountRoute')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use(fbApi)
app.use(discount)
app.listen(PORT)

