var fs = require('fs');

var sourceFile = fs.readFile('data.txt', 'utf8', function(err,data){

    if(err)
    {
        console.log(err);
    }
    else
    {
        var destFile = fs.writeFile('dest.txt', data, function(err){
            if(err)
            {
                console.log(err);
            }
        })
    }
})
