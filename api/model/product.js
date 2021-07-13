const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Es necesario un nombre del producto']
    },
    marca:{
        type: String,
        required: [true, 'Es necesario una marca del producto']

    },
    price:{
        type: Number,
        required: [true, 'Es necesario una marca del producto']

    }
})


module.exports= model("Product",productSchema);