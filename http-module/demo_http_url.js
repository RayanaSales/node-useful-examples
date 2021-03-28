var http = require("http");
var url = require("url");

/**
 * A função passada para o http.createServer() possui um reqargumento que representa a solicitação do cliente como um objeto (objeto http.IncomingMessage).
 *
 * Este objeto tem uma propriedade chamada "url" que contém a parte do url que vem depois do nome do domínio:
 */

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    /**
     * Divida a string de consulta
     * Existem módulos integrados para dividir facilmente a string de consulta em partes legíveis, como o módulo de URL.
     */
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);

    // try http://localhost:8081/?year=2017&month=July
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
