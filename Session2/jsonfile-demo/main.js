var utils = require('./filesUtils');


utils.findPersonByStreetName("France Street").then(person => {
    console.log(person);
});

