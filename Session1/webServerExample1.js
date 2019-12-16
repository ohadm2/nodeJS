function add(x,y)
{
    return x+y;
}

function mul(x,y)
{
    var result = 0;

    while(y--)
    {
        result = add(x,result)
    }

    return result;
}


//console.log(mul(7,4));
//console.log(mul(11,9));

var arr = [ [1,2], [3,4], [5,6] ];
var port = 8000;


var http = require('http');


var server = http.createServer(function (req, res) {
  res.write('<html>');
  res.write('<head>');
  res.write('</head>');
  res.write('<body>');

  var results = arr.map(x=>x.reduce((y,z) => mul(y,z)));

  results.map(x => res.write('<h1>' + x + '</h1>'));

  res.write('</body>');
  res.write('</html>');
  res.end(); //end the response
})

console.log("Running server on port " + port);

server.listen(port);
