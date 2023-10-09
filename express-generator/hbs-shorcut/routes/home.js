import express from "express"
import  Router  from "express"
import { agregarUrl, editarUrl, editarUrlForm, eliminar_Url, leer } from "../controllers/homeController.js"
import { validarURL } from "../middleware/urlValidar.js"

const routerHome = Router()



routerHome.get("/", leer)
routerHome.post("/", validarURL, agregarUrl)
routerHome.get("/eliminar/:id",eliminar_Url)
routerHome.get("/editar/:id",editarUrlForm)
routerHome.post("/editar/:id", validarURL ,editarUrl)

export default routerHome