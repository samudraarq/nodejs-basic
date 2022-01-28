require("dotenv").config();

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorControllers = require("./controllers/error");
// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("61efa781b0bf46fff5475559")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

mongoose
  .connect(
    `mongodb+srv://admin-samudra:${process.env.MONGODB_PASS}@cluster0.cd33k.mongodb.net/shop?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
