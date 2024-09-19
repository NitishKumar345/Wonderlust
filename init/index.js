// const mongoose = require("mongoose");
// const initData = require("./data.js"); // data ko require kra h data.ja file se
// const Listing = require("../models/listing.js");

// const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

// main().then(()=>{
//       console.log("connected to DB");
// })
// .catch((err) =>{
//     console.log(err);
// });

// async function main(){
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
//   };
  
//   initDB();


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj, owner: "66d5ac76ed99a4f9eb28c85c"}));
  await Listing.insertMany(initData.data);
  
  console.log("data was initialized");
};

initDB();