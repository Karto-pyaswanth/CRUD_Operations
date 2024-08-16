const express =require ("express");
const connectDb = require("./config/dbConnection");
const dotenv =require("dotenv").config();
const app=express();
const cors = require('cors');

connectDb();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRouts"))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })