const mongoose = require('mongoose')

const uri = "mongodb://localhost:27017/dbPrueba"

const conection=() => mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

conection()
    .then (console.log("todo bien en conection moongoose"))
    .catch((err)=> console.log(err))