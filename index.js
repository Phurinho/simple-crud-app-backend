const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute);

//testing
app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated");
});


mongoose
  .connect(
    "mongodb+srv://phurin:5678@backenddb.9jbhdz7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
