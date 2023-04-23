
const express = require("express");
const connectDB = require("./db/connectDb");
const deleteDoc  = require("./models/Students");
const app = express();
  

const DB_URL = process.env.DB_URL||"mongodb://0.0.0.0:27017/pratice";
const port = process.env.port||3000;

// database connection 
connectDB(DB_URL);

//create and save students
// name,age,fees,hobbies,isact,comments
 //createDoc('Charcool',21,3000,["Art","Reading"],false,[{value:"This is good artist"}]); 
//createDoc();
// retriveDoc("643fafe77e56954213be22de");
//  updateDoc("543fa5e7cf0ba339799ff733");
deleteDoc("543fa5e7cf0ba339799ff733");
app.listen((port) => {
 console.log("Server listening on port")
})