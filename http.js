const http = require('http');

    http.createServer(function (req, res) {
       
         //https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP.  
         res.writeHead(200, {'Content-Type': 'text/html'});

         res.write('<h1>mensaje visible desde el navegador</h1>');

         res.end;

}).listen(3000);
