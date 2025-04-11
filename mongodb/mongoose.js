// import mongoose
// import mongoose from "mongoose";
import mongoose  from "mongoose";
// connect to mongodb
try {
  mongoose.connect("mongodb://127.0.0.1/mongosedb");
  mongoose.set("debug", true);
  console.log("MongoDB connected successfully");
}
catch (error) {
  console.error("MongoDB connection error:", error);
}
// create schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    // create: { type: Date, default: Date.now },
    // update: { type: Date, default: Date.now },
},{
    // timestamps: true, // automatically create createdAt and updatedAt fields
    timestamps: { createdAt: 'create', updatedAt: 'update' } // automatically create create and update fields
})
// create model
// userSchema.pre('updateOne', function (next) {
//   // this.update = Date.now(); // set update to current date
//   this.set({ update: Date.now() });
//   next();
// })  

const User = mongoose.model("userdata", userSchema);
// userSchema.pre(['updateOne'], function (next) {
//   this.set({update: Date.now()});
//     // this.update = Date.now();
//     next();
// })

// create user
const createUser = async (name, email, age) => {
    const user = new User({ name, email, age });
    await user.save();
    console.log("User created:", user);
}
// const name = "subhajit";
// const email="abcdf@gs.com";
// const age = 22;
// createUser(name, email, age);
// // read user
// const readUser = async () => {
//     const users = await User.find();
//     console.log("Users:", users);
// }
// readUser();
// // update user

// const updateUser = async (id, name) => {}
  // const user = new User({ name:"my name", email:"myemial.com", age:90 });
  // await user.save();

  // await User.create({ name:"my nameb", email:"myemial.comb", age:20 });
  await User.updateOne({name:"my namex"},{$set: {age:10}});