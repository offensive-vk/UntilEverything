
// const moduleName = require('moduleName');

//const http = require('http');

// export.myDate = function(){
//     return Date();
// }

//Creating a server and displaying a message
const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hellow Guys, Im a server');
}).listen(8080);