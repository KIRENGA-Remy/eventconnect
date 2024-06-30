const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const passport = require("passport");
const connection = require("./Models/db.js");
const signUpRoute = require("./controllers/signupApi.js");
const loginRoute = require("./controllers/loginApi");
const eventRoute = require("./controllers/event.js");
const storeRoute = require("./controllers/storeApi");
const cookieSession = require("cookie-session");
const UserModel = require("./Models/user.js");
const jwt = require("jsonwebtoken");
const path = require('path');
require("./passport/passport.js");
const authRoute = require("./controllers/auth.js");
const nodemailer = require("nodemailer");
const paymentRoute=require("./controllers/paymentRoute.js")
 
// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'alleventconnect.vercel.app',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Routes
app.use("/auth", authRoute);
app.use("/v1/api/signup", signUpRoute);
app.use("/v1/api/login", loginRoute);
app.use("/v1/api/event", eventRoute);
app.use("/v1/api/store", storeRoute);
app.use("/v1/api/payment",paymentRoute);

// Database connection
connection();

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "Email not found" });
    }
    // Create a JWT token for password reset
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Set up mail options
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Event Connect - Reset Password",
      text: `${process.env.FRONTEND_URL}/authentication/reset_password/${user._id}/${token}`,
    };
    // Send the email
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .send({ message: "Check, Email is sent via your account(email)." });
  } catch (error) {
    // Log the error and return a 500 status code
    console.error("Error in forgot-password:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  try {
    // Verify the token first
    const verify = jwt.verify(req.params.token, process.env.JWT_SECRET);

    // User is authorized, proceed with password reset
    const oldUser = await UserModel.findOne({ _id: req.params.id });
    if (!oldUser) {
      return res
        .status(404)
        .send({ message: "User not found, you may signup" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Update the user's password
    const updatedUser = await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { password: hashedPassword } }
    );

    if (updatedUser.matchedCount === 1) {
      // Check if exactly one document was updated
      res.status(200).send({ message: "Password updated successfully" });
    } else {
      console.error("Error: Password update failed");
      res.status(500).send({ message: "Password update failed" }); // More specific error
    }
  } catch (error) {
    console.error("Error during password reset:", error);
    if (error.name === "JsonWebTokenError") {
      res.status(401).send({ message: "Invalid token" }); // Specific error for token issues
    } else {
      res.status(500).send({ message: "Internal server error" });
    }
  }
});
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, 'eventsbrief.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      next(err);
    }
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on http://127.0.0.1:${PORT}`);
});
