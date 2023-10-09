import mongoose from "mongoose"

const {Schema} = mongoose

const urlSchema = new Schema({
    origin:{
        type:String,
        unique:true,
        required:true
    },
    shortUrl:{
        type:String,
        unique:true,
        required:true,
    }
})

export const Url = mongoose.model("Url", urlSchema);
