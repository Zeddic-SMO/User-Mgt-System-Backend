const express = require("express")
const app = express()
/* const dotenv = require("dotenv")
dotenv.config() */
const cors = require("cors")

const corsOptions = {
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
}

app.use(cors(corsOptions))

app.use(express.json())
const router = require("./Routes/UsersRoute")
app.use(router)

// dbconnection

const dbConnection = require("./db/dbConnect")
dbConnection()

// Listening to a port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
