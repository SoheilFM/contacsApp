const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyparser = require("body-parser");
//Import ContactController
const contactController = require("./controllers/contactController");
//Import Route
const userRoute = require("./routes/contactsRoute");
//Import DATABASE
const mongoose = require("mongoose");

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//Connect to DATABASE:
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected To DB");
    },
);
//Route MiddleWares
app.use("/api/contacts", contactsRoute);

app.listen(process.env.PORT, () => {
    console.log("The Server is up And Running on port 3000");
});
