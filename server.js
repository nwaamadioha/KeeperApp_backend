const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();


const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const notesRouter = require("./routes/notes");

app.use("/", notesRouter);

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started successfully !")
});