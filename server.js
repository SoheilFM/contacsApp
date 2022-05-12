const express = require("express");
const app = express();
const bodyparser = require("body-parser");
//Import ContactController
const contactController = require("./controllers/contactController");
//Import Route
const userRoute = require("./routes/contactsRoute");
//Import DATABASE

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//Route MiddleWares
app.use("/api/contacts", contactsRoute);

app.listen(process.env.PORT, () => {
    console.log("The Server is up And Running on port 3000");
});
