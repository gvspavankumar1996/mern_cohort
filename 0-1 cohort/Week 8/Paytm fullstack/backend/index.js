// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.use("/api/user", userRouter);
app.use("/api/account", accountRouter);

app.listen(3000);
