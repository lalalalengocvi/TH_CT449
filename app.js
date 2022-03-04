const express = require("express");
const cors = require("cors");
const app = express();

const setupContactRouters = require("./app/routes/contact.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contac book application." });
});

setupContactRouters(app);

module.exports = app;