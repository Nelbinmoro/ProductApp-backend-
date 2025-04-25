// npm i dotenv
// nodemon app.js
var express = require('express');
var cors = require('cors');
var dotenv =require('dotenv');
dotenv.config();
var path = require('path')

const port= process.env.port
require('./connection');
const app = express();
app.use(express.json());
app.use(cors())

const userRoute =require('./routes/userRoute')
const productRoute = require('./routes/productRoutes')

app.use('/api',userRoute);
app.use('/p',productRoute);
app.use('/uploads',express.static(path.join(__dirname,"uploads")))

// to run server
app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
})

