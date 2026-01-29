const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS SPECIFIC STUFF
//For Serving Static File
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
//Set the template engine as pug
app.set("view engine", "pug");
//Set the views directory
app.set("views", path.join(__dirname, "views"));

//ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});

//START THE SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

