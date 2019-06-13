var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EntrySchema = new Schema({

    name: {
        type: String
    },
    color: {
        type: String
    }

})

var Entry = mongoose.model("Entry", EntrySchema)

module.exports = Entry;