
var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html', 'UTF-8');
console.log(buf.toString('UTF-8'));

app.get('/', function(request, response) {
  response.send(buf.toString('UTF-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/

