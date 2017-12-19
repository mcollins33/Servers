var http = require("http");
var portOne = 7000;
var portTwo = 7500;


function handleHappyRequests(request, response) {
    response.end("You are awesome");
}

var serverHappy = http.createServer(handleHappyRequests);

serverHappy.listen(portOne, function() {
    console.log("I'm listening at http://localhost:" + portOne);
});


function handleSadRequests(request, response) {
    response.end("Cheer up!");
}

var serverSad = http.createServer(handleSadRequests);

serverSad.listen(portTwo, function() {
    console.log("I'm listening at http://localhost:" + portTwo);
});