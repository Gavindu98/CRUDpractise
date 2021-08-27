const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const PORT = 8000;
const DB_URL ='mongodb+srv://Gavindu:Gavindu@1998@mernapp.3v2bt.mongodb.net/mernCrudretryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error' ,err));

app.listen(PORT, () =>{
    console.log('App is running on ${PORT}');
});