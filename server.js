const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    if (req.url === '/slow') {
        setTimeout(() => {
            res.end('Slow response - 100ms delay');
        }, 100);
    } else {
        res.end('Lab02 - Performance Testing');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server: http://127.0.0.1:3000');
});
