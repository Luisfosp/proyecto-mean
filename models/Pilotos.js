const mongoose = require('mongoose');
const Schema = mongoose.Schema

let Piloto = new Schema ({
    nombre: {
        type: String
    },
    numero: {
        type: Number
    },
    nacionalidad: {
        type: String
    },
    escuderia: {
        type: String
    },
    puntos: {
        type: Number
    },
    podios: {
        type: Number
    },
    wins: {
        type: Number
    },
    poles: {
        type: Number
    },
    fastlap: {
        type: Number
    },
    estado: {
        type: String
    },

},
{
    collection: 'pilotos'
})

module.exports = mongoose.model('Piloto', Piloto)