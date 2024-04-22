import mongo from "mongoose";
export const connectDb = () => {
  mongo
    .connect(
      process.env.MONGO_CONNECTION_STRING ||
        "mongodb://127.0.0.1:27017/new_collection",
      {}
    )
    .then((res) => {
      console.log("mongodb connected successfully");
    })
    .catch((err) => {
      console.log(err, "-->");
    });
};
