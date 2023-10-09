import {Tutorial} from "../tutorial.model.js"

export const create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Cantent is empaty"
        })
    }
    // Create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
    })

    Tutorial.create(tutorial, (err, data) => {
        if(err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
                    
            })
        } else {
            res.send(data)
        }
        
    })
}

export const findAll = (req, res) => {

    const title = req.body.title

    Tutorial.getAll(title, (err, data) => {
        if(err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            })
        } else {
            res.send(data)
        }
    })
}

export const findOne = (req, res) => {
    Tutorial.findById(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === "not found") {
                res.status(404).send({
                    message:`Not foun tutorial with id ${req.params.id}`
                })
            } else {
                res.status(500).send({
                    message: "Error retrieving tutorial with id" +req.params.id
                })
            }
        } else {
            res.send(data)
        }
    })
}

export const findAllPublished = (req, res) => {
    Tutorial.getAllPublished((err, data) => {
        if(err) res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        else res.send(data)
    })
}

export const update = (req, res) => {
    if(!req.body) {
        res.status(404).send({
            message:"Content can not be empty!"
        })
    }
    console.log(req.body);

    Tutorial.updateById(req.params.id, new Tutorial(req.body), (err, data) => {
        if(err) {
            if(err.kind === "not foun, no encontrado") {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}`
                })
            } else {
                res.status(500).send({
                    message:"Error alla ctualizar el tutorial con el id "+ req.params.id
                })
            }
        } else {
            res.send(data)
        }
    })
}

export const deleteOne = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
        if(err) {
            if(err.kind ==="not found") {
                res.status(404).send({
                    message:"No se encontro el tutorial con el id "+req.params.id
                })
            } else {
                res.status(500).send({
                    message: "Could no delete Tutorial wit id "+ req.params.id
                })
            }
        } else {
            res.send({message: 'El tutuorial ha sido actualizado'})
        }
    })
}
    
export const deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: 
                    err.message || "Algun error ocurrio miesntras de removian los tututoriales"
            })
        } else {
            res.send({message: "Todos los tutoriales ha sido removidos exitossamente"})
        }
        
    })
}