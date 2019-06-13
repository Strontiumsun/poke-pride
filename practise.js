var mongoose = require("mongoose");

var Entry = require("./entrySchema.js");

mongoose.connect('mongodb://localhost/randomredtest', { useNewUrlParser: true });


var enter = {
    name: "Squirtle",
    color: "Blue"
}

// Entry.create(enter)
//     .then(function (dbEe) {
//         console.log(dbEe)
//     }).catch(function (err) {
//         console.log(err.message)
//     });


// Entry.find({ color: "Red" }, function (err, res) {
//     if (err) console.log(err);
//     console.log(res)
// })


function redRandomizer() {
    Entry.find({ color: "Red" }, function (err, res) {
        if (err) console.log(err);
        console.log(res)

        var random = Math.floor((Math.random() * res.length));
        console.log(random)
        // I want to find the Pokemon at the random position and display it's name here
        console.log(res[random].name)
    })
}

redRandomizer();