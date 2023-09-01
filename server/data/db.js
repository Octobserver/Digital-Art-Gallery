import mongoose from "mongoose";
//TODO: change uri to encrypted!
const URI = "mongodb+srv://weinadai2018:XhZBmeFvwiIkWzTE@cluster0.hm7zgtb.mongodb.net/?retryWrites=true&w=majority";

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export function connect() {
  mongoose.connect(URI, option);

  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}