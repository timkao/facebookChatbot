const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;
const webhook = require('./server/api/webhook');

if (process.env.NODE_ENV !== 'production') require('./secrets');


const app = express();

app.use(bodyParser.json());
app.use('/webhook', webhook);


app.use(function(err, req, res, next){
  console.log(err);
  next();
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
