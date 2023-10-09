import express from "express"
import path from 'path'
import { fileURLToPath } from "url"
import {engine} from "express-handlebars"
import routerHome from "./routes/home.js"
import routerAuth from "./routes/auth.js"

import mongoose from "./database/db.js"



const __filename = fileURLToPath(import.meta.url)
const  __dirname = path.dirname(__filename)

const app = express()



const hbs = {
  extname:".hbs",
  partialsDir:["views/components"]
}
app.engine(".hbs", engine(hbs))
app.set("view engine", "hbs")
app.set("views","./views")

app.use(express.static(__dirname +"/public"))
app.use(express.urlencoded({extended:true}))
app.use("/", routerHome)
app.use("/auth", routerAuth)

const PORT  = process.env.PORT || 5000

app.listen(PORT, () => console.log("Servidor andando 💻, "+ "localhost:"+PORT))