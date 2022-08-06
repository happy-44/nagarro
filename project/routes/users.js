var express = require("express");
var router = express.router();
router.get('/',function(req,res){
    res.send('respond with a resource');
});
module.exports=routers;
