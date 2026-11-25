const http = require('http');

// Локал HTTP сервер
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Lab02 - Performance Testing');
});

// Сервер ажиллуулах
server.listen(3000, '127.0.0.1', () => {
    console.log('Server: http://127.0.0.1:3000');
});
