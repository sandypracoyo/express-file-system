const express = require("express");
const router = express.Router();
const users = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const data = await users.getAllUsers();

    res.json({
      status: true,
      message: "Successful",
      data
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await users.getUserById(req.params.id);

    if (data) {
      res.json({
        status: true,
        message: "Successful",
        data
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Oops user not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await users.getAllUsers();
    const data = req.body;
    console.log(req.body.username);
    data.id = result.length + 1;
    console.log(data);
    await users.addUser(data);

    res.json({
      status: true,
      message: "Successful",
      data
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error
    });
  }
});

module.exports = router;
