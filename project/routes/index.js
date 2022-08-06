var express = require("express");
var router = express.router();
router.get('/',function(req,res){
    res.render('index',{title:'Express'});
});
module.exports=routers;