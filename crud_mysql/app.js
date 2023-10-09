import express from 'express'
import cors from 'cors'
import { connection } from './db.js'
import { router } from './routes/tutorial.routes.js'
import bodyParser from 'body-parser'
import { Router } from 'express'

const app = express()

/*const corsOptions = {
    origin:"http://localhost:8081"
}*/
//app.use(cors(corsOptions))
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

app.use("/api/tutorials",router)

app.get("/", (req, res) => {
    res.json({message:"Welcome to bezkoder application."})
})

app.listen(8080, () => {
    console.log(`Server is running on port ${8080}.`);
})