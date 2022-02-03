require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const courseRouter = require("./routes/courses");
const orderRouter = require("./routes/orders");
const mediaRouter = require("./routes/media");
const paymentRouter = require("./routes/payments");
const refreshTokenRouter = require("./routes/refreshTokens");

const veryfyToken = require("./middlewares/verifyToken");
const { copyFileSync } = require("fs");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", veryfyToken, courseRouter);
app.use("/orders", orderRouter);
app.use("/media", mediaRouter);
app.use("/payments", paymentRouter);
app.use("/refresh-tokens", refreshTokenRouter);

module.exports = app;
