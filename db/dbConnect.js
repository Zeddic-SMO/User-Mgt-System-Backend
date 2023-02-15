const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

async function dbConnection() {
  mongoose
    .connect("mongodb://localhost/UserMgtSystem", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to DB successful")
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = dbConnection
