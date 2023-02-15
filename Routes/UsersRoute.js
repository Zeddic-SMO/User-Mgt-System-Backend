const express = require("express")
const { v4: uuidv4 } = require("uuid")
const router = express.Router()
const NewUser = require("../Models/UserModel")

// Read all
router.get("/", async (req, res) => {
  let users = await NewUser.find()
  res.send(users)
})

// Create new
router.post("/add", async (req, res) => {
  const { fullName, phone, email } = req.body
  const user = new NewUser({
    id: uuidv4(),
    fullName: fullName,
    phone: phone,
    email: email,
  })
  const result = await user.save()
  if (!result) return res.status(404).send("New User NOT added!")
  res.send(user)
})

// updating
router.put("/update/:id", async (req, res) => {
  const user = await NewUser.findByIdAndUpdate(
    req.params.id,
    {
      fullName: req.body.fullName,
      phone: req.body.phone,
      email: req.body.email,
    },
    { new: true }
  )
  if (!user)
    return res
      .status(404)
      .send(`User with id ${req.params.id} does NOT exists!`)

  user.fullName = req.body.fullName
  user.phone = req.body.phone
  user.email = req.body.email

  res.send("User Info updated")
})

// Fetching the details of a particular user
router.get("/view/:id", async (req, res) => {
  const user = await NewUser.findById(req.params.id)

  if (!user)
    return res
      .status(404)
      .send(`User with id ${req.params.id} does NOT exists!`)

  res.send(user)
})

// Deleting a particular user
router.delete("/delete/:id", async (req, res) => {
  const user = await NewUser.findByIdAndRemove(req.params.id)
  if (!user) return res.status(404).send(`No User with the id ${req.params.id}`)
  res.send(user)
})

module.exports = router
