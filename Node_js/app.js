import express  from 'express'
import fs from "fs"

const app = express()
const puerto = 3000
//middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))//sentencia para leer datos enviados atraves de un formulario post

app.get('/', (req, res) => {
  console.log("andando ")
  res.send("Hello World")
})

app.post('/formulario',(req, res) => {
  console.log(req.body)
  const {nombre, apellido} = req.body
  
  if(!nombre || !apellido) return (res.redirect("/error.html"))
  fs.writeFile(`${nombre}.txt`, apellido, (err) => {
    if(err) return res.send("Se fallo al crear el archivos")
    console.log(__dirname)
    res.download(__dirname + `/${nombre}.txt`)
    //res.send("se envio el formulario")
  })
})


app.listen(puerto,() => console.log("🥶🥶🥶"))

