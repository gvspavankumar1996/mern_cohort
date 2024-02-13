// backend/api/index.js
const express = require("express");
const { User, Account } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware/middleware");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
const updateBody = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password: zod.string().optional(),
});

const router = express.Router();

router.put("/", authMiddleware, async (req, res) => {
  const { lastName, firstName, password } = req.body;

  const { success } = updateBody.safeParse({
    lastName,
    firstName,
    password,
  });
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.findOneAndUpdate(
    {
      _id: req.userId,
    },
    req.body
  );

  res.json({
    message: "Updated successfully",
  });
});

router.post("/signup", async (req, res) => {
  const { username, firstName, lastName, password } = req.body;

  const { success } = signupBody.safeParse({
    username,
    password,
    firstName,
    lastName,
  });

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username,
    password,
    firstName,
    lastName,
  });

  const userId = user?._id;

  /// ----- Create new account ------

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  /// -----  ------

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.json({
    userId: "userCreated",
    token: token,
  });
});

// {
//   "username": "gvspavankumar1996@gmail.com",
//   "password": "qwerty@123",
//   "firstName":"pavvi",
//   "lastName":"gunturi"

//  }
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const { success } = signinBody.safeParse({
    username,
    password,
  });

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});
router.get("/bulk", async (req, res) => {
  const filter = req?.query?.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
