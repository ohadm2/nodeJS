var express = require ('express');
var bodyParser = require('body-parser');
var moviesModel = require('./models/moviesModel');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/movies', function(req, res)
{
    moviesModel.find({}, function(err, movies)
    {
        if(err)
        {
            return res.send(err);
        }
        else
        {
            return res.json(movies);
        }
    });
});

app.post('/', function(req, res)
{
    
});

app.listen(8000);