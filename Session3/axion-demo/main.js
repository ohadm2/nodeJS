var utils = require('./utils');
var http = require('http');

var port = 8000;

var server = http.createServer(function (req, res) {
    /*
    utils.getAllUserDetailsFromWebService(3).then(user => {
        res.write(JSON.stringify(user));
        
        res.end(); //end the response
    });
    */

    /*
    utils.getUserNameAndEmailFromWebService(4).then(user => {
        res.write(JSON.stringify(user));
        res.end(); //end the response
    });
    */

    utils.getUserNameFromWebService(5).then(userName => {
        res.write(JSON.stringify(userName));
        res.end(); //end the response
    });
   
})

console.log("Running server on port " + port);

server.listen(port);



