var express = require("express"),
    app     = express();
    
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));

app.get("/", function(req, res){
   res.render("./public/index.html");
});

app.listen(process.env.PORT, process.env.IP, function()
{
   console.log("Simple server started and listening on " + process.env.PORT); 
});