const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username,
    password,
  });

  res.json({ msg: "Admin created" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  try {
    const docs = await Admin.find({ username, password }).exec();

    if (docs.length > 0) {
      const token = jwt.sign({ username }, JWT_SECRET);
      res.json({ token: token });
    } else {
      res.status(411).json({ msg: "Incorrect username or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "Course created successfully",
    courseId: newCourse._id,
    course: newCourse,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.json({ courses: allCourses });
});

module.exports = router;
