const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongoose.set("strictQuery", false)

async function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nhc3uy0.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connection to DB successful")
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = dbConnection
