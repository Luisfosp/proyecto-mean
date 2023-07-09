const express = require('express')
const pilotoRuta = express.Router()


let Piloto = require('../models/Pilotos')

//agregar un piloto nuevo
pilotoRuta.route('/create').post((req, res )=>{
    Piloto.create(req.body)
    .then((data) => {
        console.log('se agrego un documento')
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
    })
})


//obtener todos los pilotos
pilotoRuta.route('/pilotos').get((req,res) => {
    Piloto.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//obtener un solo piloto, por su ID
pilotoRuta.route('/piloto/:id').get((req,res) => {
    Piloto.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//actualizar un piloto 

pilotoRuta.route('/update/:id').put((req, res) => {
    Piloto.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


//eliminar piloto 
pilotoRuta.route('/delete/:id').delete((req, res) => {
    Piloto.findByIdAndRemove(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = pilotoRuta;