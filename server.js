var express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

require('./hbs/helpers/helpers')
var app = express()
app.use(express.static(__dirname + "/public"))
    //EXPRESS HBS ENGINE
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Pps & Gms $$$"
    })
})
app.get('/about', (req, res) => {
        res.render('about', {
            nombre: "IIXIII"
        })
    })
    // app.get('/data', (req, res) => {
    //     res.send("Hola data")
    // })

// app.get('/', (req, res) => {
//     // let salida = {
//     //     nombre: "IIXIII",
//     //     edad: 19,
//     //     url: req.url
//     // }
//     // res.send(salida)
// })
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});