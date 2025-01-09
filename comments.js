// Create web server
// 1. Create a web server
// 2. Load the comments.html file
// 3. Load the comments.json file
// 4. Parse the comments.json file
// 5. Add the comments to the comments.html file
// 6. Send the comments.html file to the client

// Step 1: Create a web server
// Load the http module
var http = require('http');

// Create a web server
http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://localhost:8081/');