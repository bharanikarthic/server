const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/signup' && req.method === 'POST') {
    let body = '';
    
    // Collect request data
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    // Process request data
    req.on('end', () => {
      // Here you can process the signup data received in the 'body' variable
      // For this example, let's just log it to the console
      console.log('Signup data:', body);
      
      // Send a response back
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('200 success!');
    });
  } else {
    // Invalid endpoint or method
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid endpoint');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});