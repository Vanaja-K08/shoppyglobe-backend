const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// mongodb+srv://vanajakoppad_db_user:gAJE3rlKw6bjpnb9@cluster0.h52gie8.mongodb.net
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");  
}); 