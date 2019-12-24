var axios = require('axios');
var json = require('jsonfile');


var webServiceUsersUrl = "https://jsonplaceholder.typicode.com/users";
var webServiceTodosUrl = "https://jsonplaceholder.typicode.com/todos";

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

exports.getUserNameFromWebService = function(userID)
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


exports.getUserAssignmentsFromWebService = function(userID)
{
    var prom = new Promise(resolve =>
    {
        var dataProm = this.getUserNameAndEmailFromWebService(userID);
        
        dataProm.then(data =>
        {
            var name = data[0];

            if(name.startsWith("E"))
            {
                axios.default.get(webServiceTodosUrl).then(function (response) {
                    var dataArr = response.data;

                    var thisUserOnlyAssignmentsArr = dataArr.filter(x => x.userId == userID);

                    var assignments = 
                    {
                        "name" : name,
                        "userID" : userID,
                        "assignments" : thisUserOnlyAssignmentsArr.filter(x => x.title)
                    }

                    resolve(assignments);
                });
            }
            else
            {
                var assignments = 
                {
                    "name" : name,
                    "userID" : userID,
                }

                resolve(assignments);
            }
        })
    });
        
    return (prom);
}

