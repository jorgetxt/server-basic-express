require('../api/conection')
const Product = require('../api/model/product')

const addProduct= async (data) =>{
    const product = new Product(data);
    const productSave = await product.save();
    return productSave;
}



const getProducts = async()=>{
    const products = await Product.find({});
    return products;
}

const Peticiones = {};

Peticiones.addProduct = addProduct;
Peticiones.getProducts = getProducts;

module.exports= Peticiones;

getProducts().then(e=> e)
            .catch(err=> console.log(err,"es un error"))
            