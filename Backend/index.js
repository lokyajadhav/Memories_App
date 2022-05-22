// impprting dotenv
//require("dotenv").config();
import dotenv from "dotenv"
dotenv.config();
//const bodyParser = require("body-parser");
import bodyParser from "body-parser";
//const cors=require("cors")

import cors from "cors";
//import { json } from "body-parser";

//const express=require("express");
import express from "express";
//const mongoose=require("mongoose");
import mongoose from "mongoose";
//import { connect } from "mongoose";

const memories=express();
import router from "./routes/post.js";

memories.use('/posts',router);

memories.use(bodyParser.json({limit:"30mb",extended:"true"}));
memories.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
memories.use(cors());

mongoose.connect(process.env.MANGO_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>memories.listen(5000,()=>console.log("server running on 5000 port")))
.catch((error)=>console.log("getting some error in onnecting to the database"));

//mongoose.set('useFindAndModify',false);
