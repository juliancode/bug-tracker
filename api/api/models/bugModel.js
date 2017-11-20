const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var BugSchema = new Schema({
    url: {
        type: String,
        required: 'The URL the bug can be found'
    },
    description: {
        type: String,
        default: "Des"
    },
    date_found: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Bugs', BugSchema);
