const user = require("../models/User");
const userModel = require("../models/User");

//put
exports.createUser = async (req, res) => {
  console.log(req.body);
  if (req.body === null) console.log("Empty");
  const User = await userModel.create({
    username : req.body.username,
    email : req.body.email,
    password: req.body.password,
  });
  console.log(User);
  //201 stands for created ;
  return res.status(201).json({ message: "User Created" });
};

//get all inStock
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    //200 response code that indicates a successful request from a client to a server
    return res.status(200).json({ users });
  } catch (err) {
    //The HTTP status code 500 is a generic error response
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

//getById
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      // status code that indicates a web server can't find a requested resource
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

//Update
exports.updateUserById = async (req, res) => {
  const user = await userModel.findByIdAndUpdate(req.params.id,req.body);
  return res.json(user);
};

//delete
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User Deleted", user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};