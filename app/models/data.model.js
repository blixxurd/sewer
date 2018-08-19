const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
    data_set: String,
    data: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});

module.exports = mongoose.model('RawData', DataModel);