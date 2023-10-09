import dotenv  from "dotenv"

import mongoose from "mongoose"

dotenv.config()

export default mongoose

mongoose
    .connect(process.env.URI)
    .then(() => console.log("Base de dtos conectada :)"))
    .catch((e) => console.log("fallo de conexion " + e))