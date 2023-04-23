const mongoose = require("mongoose");

//Defining Schemea
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18,max:60},
    fees:{type:Number, required:true, validate:v => v >= 2000},
    hobbies:{type :Array},
    isactive:{type:Boolean},
    comments:[{value:{type:String}, published:{type:Date, default:new Date}}],
    join:{type:Date, default:new Date}
})
  
// console.log(studentSchema.path('age')); 

const studentModel = mongoose.model('Student',studentSchema);

const createDoc =async( )=>{
    try{
        const doc = await studentModel.create({
            name:"tannu",
            age:21,
            fees:5000,
            hobbies:["artist","reading"],
            isactive:true,
            comments:[{value:" I am good artist"}]
            // through paramters
            // name,
            // age,
            // fees,
            // hobbies,
            // isactive:isact,
            // comments:comments
        })
        // const doc1 = await studentModel.create({
        //     name:"udit",
        //     age:21,
        //     fees:5000,
        //     hobbies:["artist","reading"],
        //     isactive:true,
        //     comments:[{value:" I am good artist"}]
        //     // through paramters
        //     // name,
        //     // age,
        //     // fees,
        //     // hobbies,
        //     // isactive:isact,
        //     // comments:comments

        // })
        console.log(doc);
         const result= await doc.save();
       // const result= await studentModel.insertMany([doc,doc1]);
        console.log(result); 
 
    }
    catch(err){
        console.log(err);
    }
}   



//retrive student
const retriveDoc =async(id)=>{
    try{
        // const doc = await studentModel.find().select(["name"]);//include
        // const doc = await studentModel.find().select({name:0});// exclude
       // const doc = await studentModel.find({},"name");// inculde
        // const doc= await studentModel.findById(id)
        //const doc= await studentModel.findById(id,"name")
        // const doc= await studentModel.find({name: "tannu"})
        //  const doc = await studentModel.find().limit(2);// limited data
       // const doc= await studentModel.find().skip(1)// skip student data
       //const doc= await studentModel.find().countDocuments()// count documents
       //const doc= await studentModel.find().sort({age:1});
       // const doc= await studentModel.find().sort({age:-1});
       //const doc= await studentModel.find({},{name:1,age:1},{limit:1});// mixed object data
      // const doc= await studentModel.find({age:{$gt:20}});//query comparison object
      // const doc= await studentModel.find({age:{$gte:20}})//query comparison
       //const doc= await studentModel.find({age:{$lt:22}})//query comparison
      // const doc= await studentModel.find({age:{$lte:22}})//query comparison
      // const doc= await studentModel.find({age:{$ne:22}})//query comparison
       //const doc= await studentModel.find({age:{$in:[21,25]}})//query comparison
       //const doc= await studentModel.find({age:{$nin:[21,25]}})//query comparison
      // const doc= await studentModel.find({$and:[{age:21},{fees:5000}]})// logical operator
       //const doc= await studentModel.find({$or:[{age:21},{fees:5000}]})// logical operator
    //    const doc= await studentModel.find({$and: [{age:{$gt:20}},{fees:5000}]})// logical operator
        // const doc= await studentModel.find({$or: [{age:{$gt:20}},{fees:5000}]})ogical operator
        //const doc= await studentModel.find({age:{$not:{$gt:21}}})
        //const doc= await studentModel.find({$nor: [{age:{$gt:20}},{fees:5000}]})//logical operator
 
        console.log(doc);
    }
    catch(err){
        console.log(err);
    } 
}

//update student

const updateDoc =async(id,data)=>{
    try{
        //const doc = await studentModel.findByIdAndUpdate(id,{name:"drew"},{returnDocuments:"after"});
       // const doc = await studentModel.updateOne({_id:id},{name:"Udit"},{returnDocuments:"after"});
        // const doc = await studentModel.updateOne({_id:id},{name:"Udit"},{upsert:true},{returnDocuments:"after"}); 
        const doc = await studentModel.updateMany({_id:id},{name:"Drew"},{upsert:true},{returnDocuments:"after"}); 
 

        console.log(doc);
    }
    catch(err){
        console.log(err);
    }
}

//delete all documents

const deleteDoc =async(id)=>{
    try{
        //const doc = await studentModel.findOneAndDelete({_id:id});
        //const doc = await studentModel.deleteOne({_id:id});
        const doc = await studentModel.deleteMany({_id:id});
        console.log(doc);
    }
    catch(err){
        console.log(err);
    }
}



module.exports=deleteDoc ;