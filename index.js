const express = require("express");
const app = express();
const bookRouter =require('./routes/book_routes')
const orderRouter =require("./routes/order.routes")
const customerRouter =require("./routes/customer_routes")
const mongoose = require('mongoose')
app.use(express.json())
require("dotenv").config();

app.use("/api/books",bookRouter)
app.use("/api/orders",orderRouter)
app.use("/api/customers",customerRouter)
mongoose.connect(process.env.DB_URL)
    .then((result)=>{
          app.listen(process.env.PORT,()=>console.log("server is running"))
    }).catch((err)=>{
        console.log(err);
    })



