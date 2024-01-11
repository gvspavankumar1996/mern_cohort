const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const updateRequestCount=(req,res,next)=>{
   requestCount =requestCount+1;
   next()
}
app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.use(updateRequestCount)
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


// module.exports = app;
app.listen(3000)