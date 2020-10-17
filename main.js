const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

app.get("/", function (req, res) {
    var today = new Date();

    var options = {
        weekDay: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems: items });

    app.post("/", function (req, res) {
        item = req.body.newItem;
        items.push(item);
        res.redirect("/");
    });
})
items = [];
app.listen(3000, function () {
    console.log("server started");
})

// npm init
// npm install express
// npm ejs
// npm install body-parser --save --> middleware