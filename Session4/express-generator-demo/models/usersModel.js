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

exports.getAllUserNamesAndIDsFromWebService = function()
{
    var prom = new Promise(resolve =>
    {
        axios.default.get(webServiceUsersUrl).then(function (response) {
            var allData = response.data;
            
            var allUserNamesAndIDs = allData.map(x => [x.name, x.id]);

            resolve(allUserNamesAndIDs);
        });
    });

    return (prom);
}

exports.getUserNameAndEmailFromWebService = function(userID)
{
    var prom = new Promise(resolve =>
    {
        axios.default.get(webServiceUsersUrl + "/" + userID).then(function (response) {
            var personData = response.data;
            var result = [];

            result.push(personData.name);
            result.push(personData.email);
            
            resolve(result);
        });   
    });
        
    return (prom);
}


// not working
exports.getUserNameAndEmailFromWebService2 = function(userID)
{
    var prom = new Promise(resolve =>
    {
        axios.default.get(webServiceUsersUrl + "/" + userID).then(function (response) {
            var allData = response.data;

            //console.log(allData);

            var userDetails = allData.map(x => ({id: x.id, name: x.name}));
            
            resolve(userDetails);
        });
    });

    return (prom);
}