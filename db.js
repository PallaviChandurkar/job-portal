const mongoose = require("mongoose");

dbConnect()

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://PallaviChandurkar:123pallavi@cluster0.fepot.mongodb.net/jobportalapp' , {useNewUrlParser : true});
        console.log("Mongo DB Connetion success")
    } catch (error) {
        console.log("Mongo DB Connetion failed")
    }
}

module.exports = mongoose