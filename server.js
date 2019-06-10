const express = require('express');
bodyParser = require('body-parser')
app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


//   Using GET Request
// app.get('/myform', function (req, res) {
//   const myMessage = req.query;
//   const msg = 'Your message: ' + myMessage
//   res.send(msg);
//   console.log(msg);
// });


// Using POST Request
// app.post('/myform', function(req, res){
//   const myMessage = req.body.message;
//         msg = 'Your message: ' + myMessage
//   res.send(msg);
//   console.log(msg);
//   res.end();
// });


app.post('/myform', function (req, res) {
  console.log(req.body);
  res
    .status(200)
    .json({
      reply: req.body.message
    });
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});
