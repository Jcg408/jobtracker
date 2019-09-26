const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
       
    },
    company: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        minlength: 5
    },
    
    action: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    note: {
        type: String,
        required: true,
        minlength: 10
    }
}, {
    timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;