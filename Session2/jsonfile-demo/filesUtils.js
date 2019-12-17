exports.findPersonByStreetName = function(streetName)
{
    //console.log(streetName);
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
                var personsArr = data.persons;
                
                //personsArr.map(x => console.log(x.address.streetName));
                
                var result = personsArr.filter(x => x.address.streetName == streetName);
                
                //console.log(result);
                
                if(result.length > 0)
                {
                    resolve(result[0].name);
                }
                else
                {
                    resolve("Not found!");
                }
            }
        });
    });
    
    return (prom);
}