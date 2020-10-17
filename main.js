const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

let items = ["Yoga 5am - 6am", "Meditation 6:10am - 6:30 am", "Study 8pm 11pm"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

    app.get("/", function (req, res) {
        const day = date.getDate();

        res.render("list", { listTitle: day, newListItems: items });
    });

    app.post("/", function (req, res) {
        let item = req.body.newItem;

        if(req.body.list === "Work List"){
            workItems.push(item);
            res.redirect("/work");
        }else{
            items.push(item);
            res.redirect("/");
        }
    });

    app.get("/work", function(req, res){
        
        res.render("list", { listTitle: "Work List", newListItems: workItems });
    })


app.listen(3000, function () {
    console.log("server started");
})

// npm init
// npm install express
// npm ejs
// npm install body-parser --save --> middleware