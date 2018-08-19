const http = require('http')

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: "IIXIII",
        edad: 19,
        url: request.url
    }


    response.write(salida)
    response.end()
}).listen(8080)

console.log("Escuchando el puerto 8080");