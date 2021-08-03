const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ExerciseModel = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
},
    {
        timestamps: true,
    });

const Exerise = mongoose.model('Exercise', ExerciseModel);

module.exports = Exerise;