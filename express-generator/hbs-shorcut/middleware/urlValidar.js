import  {Url}  from "../models/Url.js"

export const validarURL = (req, res, next) => {
    try{
        const {originUrl} = req.body 
        const urlsFrontEnd = new Url(originUrl)
        if(urlsFrontEnd.originUrl !== null){
            return next()
        }else{
            throw new Error("no valida")
        }
    } catch(error) {
        return res.redirect("/")
    }
}