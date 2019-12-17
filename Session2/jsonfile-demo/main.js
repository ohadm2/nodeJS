var utils = require('./filesUtils');


utils.findPersonByStreetName("France Street").then(person => {
    console.log(person);
});

utils.findPersonByStreetName("no street").then(person => {
    console.log(person);
});

utils.findPersonByStreetName("Jerusalem Street").then(person => {
    console.log(person);
});