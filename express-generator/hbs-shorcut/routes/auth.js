import express from "express"
import { Router } from "express"

const routerAuth = Router()

routerAuth.get("/loguin",(req,res) => {
  res.render("loguin")
})


export default routerAuth