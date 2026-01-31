const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// mongodb+srv://vanajakoppad_db_user:gAJE3rlKw6bjpnb9@cluster0.h52gie8.mongodb.net
// MongoDB connection
mongoose.connect('mongodb+srv://vanajakoppad_db_user:gAJE3rlKw6bjpnb9@cluster0.h52gie8.mongodb.net/shoppyglobe') //cloud - returns a promise
.then(()=>{ console.log(`DB CONNECTED`) })
.catch(()=>{ console.log(`DB NOT CONNECTED`) })

app.listen(5000, () => {
  console.log("Server running on port 5000");
}); 