const express = require("express");
const cors = require('cors');

const Peticiones = require("../peticionesdb/peticiones")
const app = express();

app.use(express.json());
app.use(cors());


//setttings, es la forma de usar variables
app.set("appName", "Servidor Express");
// en settings se le llama asi a la variable
console.log(app.get("appName"));

//middleware, envian info antes de la peticion, Morgan es un Framework para hacer middlewares con archivo como html
app.all("/user", (req, res, next) => {
	console.log("por aqui paso");
	next();
});

//route

app.get("/", (req, res) => {
	res.send("Hello world 245");
});

app.get("/products", (req, res) => {
	console.log(Peticiones.getProducts().then(e=> console.log(e)));
	Peticiones.getProducts().then(e=>res.json(e)).catch(err=>console.log(err))
});

app.post("/product", (req, res) => {
	console.log(req.body, "////////////////////llega al api////////////////////////////////")
	Peticiones.addProduct(req.body);
	res.send("Post request received");
});
app.post("/user/:id", (req, res) => {
	console.log(req.body);
	/*para llamar parametro de la url*/
	console.log(req.params);
	res.send("Post request received");
});

app.listen(4000, () => {
	console.log("Server on Port 4000");
});
