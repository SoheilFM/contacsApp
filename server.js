const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const contactController = require("./controllers/contactController");
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.listen(process.env.PORT, () => {
    console.log("The Server is up And Running on port 3000");
});
