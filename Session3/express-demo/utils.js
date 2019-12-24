
exports.isValidLogin = function(username, password)
{
    var prom = new Promise(resolve =>
    {
        var jsonfile = require('jsonfile');

        jsonfile.readFile('jsonData.json', function(err, data) {
            if(err)
            {
                resolve(err);
            }
            else
            {
                if(username == data.username && password == data.password)
                {
                    resolve(true);
                }
                else
                {
                    resolve(false);
                }
            }
        });
    });
    
    return (prom);
}