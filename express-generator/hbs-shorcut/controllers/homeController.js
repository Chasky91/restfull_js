import { Url } from "../models/Url.js"
import { nanoid } from "nanoid"


export const leer = async(req,res) => {
    
    try {   
        const  urls = await Url.find().lean()
        res.render("home", {urls: urls})
    }catch(error){
        console.log(error)
        res.send("Fallo algo")
    }
    
  
}

export const agregarUrl = async (req,res) => {
    const {origin} = req.body
    try{
        const url = new Url({origin:origin, shortUrl:nanoid(6)
        })
        await url.save()
        res.redirect("/")
    } catch(error) {
        console.log(error)
        res.send("Algo fallo")
    }
}

export const editarUrlForm = async (req,res) => {
    const {id} = req.params

    try{
        const  url = await Url.findById(id).lean()
        res.render("home", {url})
    } catch(error) {
        console.log(error)
        res.send("Algo fallo en editar")
    }
}

export const editarUrl = async (req,res) => {
    const {origin} = req.body
    const {id} = req.params

    console.log(origin, "origin")
    try{
        let doc = await Url.findByIdAndUpdate(id, {origin: origin})
        console.log(doc)
        res.redirect("/")
    } catch(error) {
        console.log(error)
        res.send("Algo fallo en editar")
    }
}

export const eliminar_Url = async(req,res) => {
    const {id} = req.params
    console.log(id)

    try {   
        //busca y elimina por id
        await Url.findByIdAndDelete(id)
        res.redirect("/")
    }catch(error){
        console.log(error)
        res.send("Fallo algo")
    }
    
}