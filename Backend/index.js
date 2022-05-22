// impprting dotenv
require("dotenv").config();

const bodyParser = require("body-parser");
const cors=require("cors")
const { json } = require("body-parser");

const express=require("express");

const mongoose=require("mongoose");

const { connect } = require("mongoose");

const memories=express();

memories.use(bodyParser.json({limit:"30mb",extended:"true"}));
memories.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
memories.use(cors());

mongoose.connect(process.env.MANGO_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>memories.listen(5000,()=>console.log("server running on 5000 port")))
.catch((error)=>console.log("getting some error in onnecting to the database"));

//mongoose.set('useFindAndModify',false);
