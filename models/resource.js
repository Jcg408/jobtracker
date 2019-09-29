const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: {
        type: String
    },

    url: {
        type: String
    },

    subject: {
        type: String
    },
    description: {
        type: String
    }
}, {
        timestamps: true,
        }
    );

    const Resource = mongoose.model('Resource', resourceSchema);

    module.exports = Resource;