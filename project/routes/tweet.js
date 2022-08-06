var express = require("express");
var router = express.router();

const db = require("../config/dbconfig");
const orderby = require("lodbash/orderby");


router.get("/getall",function(request,response){
    const options = {
        table : tweets,
        searchattribute: "userhandle",
        searchValue: "*",
        attributes: ["*"]
    };
    db.searchbyvalue(options,(err,res) => {
        if(err){
            response.status(500).send({ error:err });
        }else{
            console.log(res);
            const tweetdata = res.data;
            const sortedtweets=orderby(tweetsdata,["__createdtime__"])
            response.send({result: sortedtweets});
        }
    });
});