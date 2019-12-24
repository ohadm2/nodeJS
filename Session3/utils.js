var axios = require('axios');
var json = require('jsonfile');


var webServiceUsersUrl = "https://jsonplaceholder.typicode.com/users";

exports.getAllUserDetailsFromWebService = function(userID)
{
    var prom = new Promise(resolve =>
    {
        axios.default.get(webServiceUsersUrl + "/" + userID).then(function (response) {
            
            //console.log(response.data);
            resolve(response.data);
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

exports.getUserAssignmentsFromWebService = function(userID)
{
    var prom = new Promise(resolve =>
    {
        var dataProm = this.getUserNameAndEmailFromWebService(userID);
        
        dataProm.then(data =>
            resolve(data[0])
        )
    });
        
    return (prom);
}

