const mongoose = require("mongoose")
mongoose.connect(process.env.mongodb_url)
    .then(() => {
        console.log("Conneted to local DB");
    })
    .catch(() => {
        console.log("Error!! Connection lost..");
    })    