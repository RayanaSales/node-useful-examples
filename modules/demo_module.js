var http = require("http");
var dt = require("./myfirstmodule");

/**
 * Node.js como um servidor web
 * O módulo HTTP pode criar um servidor HTTP que escuta as portas do servidor e dá uma resposta ao cliente.
 */

http
  .createServer(function (req, res) {
    /**
     * Se a resposta do servidor HTTP deve ser exibida como HTML, você deve incluir um cabeçalho HTTP com o tipo de conteúdo correto
     */
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8081);

/**
 * A função passada no http.createServer() método, será executada quando alguém tentar acessar o computador na porta 8080.
 */

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
