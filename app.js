// const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// const routes = require("./routes");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(8000);
app.listen(8000);
