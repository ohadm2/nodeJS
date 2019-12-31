var axios = require('axios');

var webServiceUsersUrl = "https://jsonplaceholder.typicode.com/users";

exports.getAllUserNamesFromWebService = function()
{
    var prom = new Promise(resolve =>
    {
        axios.default.get(webServiceUsersUrl).then(function (response) {
            var allData = response.data;
            
            var allUserNames = allData.map(x => x.name);

            resolve(allUserNames);
        });
    });

    return (prom);
}
