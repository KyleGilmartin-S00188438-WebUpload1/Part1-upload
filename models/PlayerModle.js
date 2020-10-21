import uniqueValidator from 'mongoose-unique-validator';
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerModle = new Schema({
    Pfname: { type: String, required: true },
    Plname: { type: String, required: true },
    Page: { type: Number, required: true },
    Pteam: { type: String, required: true },
    Pposition: { type: String, required: true },
    Pwage: { type: Number, required: true },
    Pskill: { type: Number, required: true },
    PweekFoot: { type: String, required: true },
}, { toJSON: { virtuals: true } })


playerModle.plugin(uniqueValidator);

let Players = mongoose.model('Player', PlayerSchema)


export { Players }