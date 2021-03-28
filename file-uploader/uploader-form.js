/**
 * Existe um módulo muito bom para trabalhar com uploads de arquivos, chamado "Formidable".
 *
 * O módulo Formidable pode ser baixado e instalado usando o NPM: npm install formidable
 */

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      /**
       * analisando o arquivo enviado.
       *
       * Quando o arquivo é carregado e analisado, ele é colocado em uma pasta temporária em seu computador.
       */
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        /**
         * salvando o arquivo
         *
         * Quando um arquivo é carregado com êxito para o servidor, ele é colocado em uma pasta temporária.
         *
         * O caminho para este diretório pode ser encontrado no objeto "files", passado como terceiro argumento na parse()função de callback do método.
         *
         * Para mover o arquivo para a pasta de sua escolha, use o módulo Sistema de Arquivos (fs) e renomeie o arquivo:
         */
        var oldpath = files.filetoupload.path;
        var newpath = "./" + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      /**
       * Form HTML para submeter o arquivo
       */
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8085);

// Console will print the message
console.log("Server running at http://127.0.0.1:8085/");
