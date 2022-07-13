const http = require('http');
let fs = require("fs");
const superheroes = require("superheroes");



// const server = http.createServer((req, res) => {
//     console.log("Server started");
// });
// server.listen(3000, 'localhost', () => {
//     console.log('server is on!');

//     res.setHeader('Content-Type', 'text/plain');
//     res.write('<h1> HEllO </h1');
//     res.write('<h2> i m the server </h2');
//     res.end();
// });    


// fs.readFile('./index1.html', (error, fileData) => {
//     if (error) console.error("Failed to load");
//     else {
//         res.write(fileData);
//         res.end();
//     }
// });


// console.log(superheroes.all);
// console.log(superheroes.random());



const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/plain');
    let path = "C:\Users\\user\\OneDrive\\Desktop\\Nagarro_main\\pokemon(assignment-1)\\index.html";
    fs.readFile(path, (err, fileData) => {
        if(err){
            console.error("Failed to load");
        }else{
            res.write(fileData);
            res.end();
        }
    });
});

server.listen(3000, "localhost", () => {
    console.log("listening on port 3000 on localhost");
});