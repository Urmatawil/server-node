const express = require("express")

const app = express()
const path = require('path')

//usamos la funcion join de path para unir el directorio raiz + la carpeta donde estan los assets
app.use('/public', express.static(path.join(__dirname, '/html/assets')))

app.get('/', (req, res) => {
    res.sendFile('/html/index.html', {
        root: __dirname
    })
})

app.listen(3000)