// src/data-access/config/connect-to-db.ts
import mongo from "mongoose";
var connectDb = () => {
  mongo.connect(
    process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/new_collection",
    {}
  ).then((res) => {
    console.log("mongodb connected successfully");
  }).catch((err) => {
    console.log(err, "-->");
  });
};
export {
  connectDb
};
//# sourceMappingURL=connect-to-db.js.map