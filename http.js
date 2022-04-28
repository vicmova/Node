const http = require('http');

    http.createServer(function (req, res) {

    res.write('<h1>mensaje que aparecerá en el navegador</h1>');

    res.end;

}).listen(3000);