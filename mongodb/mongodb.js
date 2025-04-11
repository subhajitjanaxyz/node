import { MongoClient } from "mongodb";
const client=new MongoClient("mongodb://127.0.0.1");
await client.connect();
const db=client.db("subhajit");
const usercollection=db.collection("student");

//create collection
// usercollection.insertMany([{name:"subhajit",age:22},{name:"a",age:23},{name:"b",age:24},{name:"c",age:25}]);
//read collection
const user =await usercollection.find().toArray();
console.log(user);
// const user1=await usercollection.findOne({name:"subhajit"});
// console.log(user1);
//update collection
// const user2=await usercollection.updateOne({name:"subhajit"},{$set:{age:93}});
// console.log(user2);
//delete collection
const user3=await usercollection.deleteOne({name:"a"});   
console.log(user3);