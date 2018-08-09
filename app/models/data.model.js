const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
    set: String,
    data: mongoose.Schema.Types.Mixed,
    updated: { type: Date, default: Date.now },
    added: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('RawData', DataModel);