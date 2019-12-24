
var express = require ('express');
var bodyParser = require('body-parser');
var utils = require('./utils');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res)
{
    res.sendFile(__dirname + "/templates/index.htm");
})

app.post('/login', function(req, res)
{
    utils.isValidLogin(req.body.user, req.body.pwd).then(status =>
    {
        if(status)
        {
            res.send("Credentails check passed!");
        }
        else
        {
            res.redirect('/');
            //res.send("Credentails check failed!");
        }
    })
})

app.listen(8000);