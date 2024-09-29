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
mongoose.connect('mongodb+srv://keyum:WypzYsk7huP8k6dE@cluster0.vktkwku.mongodb.net/escapedis')
.then(result => {
  console.log('connected to mongoDb')
  console.log('listening on port 3000')
  app.listen(PORT)
})
.catch(err => {
  console.log(err)
})


