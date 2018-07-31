var http = require("http");


var PORT = 7000;


function handleRequest(request, response) {

    response.end("You're awesome!! Path Hit: " + request.url);
}
var PORT = 7500;
function handleRequest(request, response) {
    response.end("you chose poorly!! Path Hit: " + request.url);
}
var server = createServer(handleRequest);

server.listen(PORT, function() {

    console.log("server listening on: http://localhost");
});



