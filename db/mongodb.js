const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017")
    .then(() => {
        console.log("Conneted to local DB");
    })
    .catch(() => {
        console.log("Error!! Connection lost..");
    })   