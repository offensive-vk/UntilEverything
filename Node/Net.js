const net = require('net');

const server = net.createServer((socket) => {
    socket.write(Buffer.from('Hello, world!'));
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
