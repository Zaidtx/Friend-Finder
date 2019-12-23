// installing expresss server
var express = require("express");
//Tells node that we are creating an express server
var app = express();

var PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " +PORT);
})