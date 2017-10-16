const http = require('http');

const articles = require("./articles.json");
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    parseBodyJson(req, (err, payload)=>{
        console.log(articles);
        const handler = getHandler(req.url);
        handler(req, res, payload, (err, result)=>{
            if(err){
                res.statusCode=err.code;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));
                return;
            }
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            ChangeArticles();
            res.end(JSON.stringify(result));
        })
    })
});
function parseBodyJson(rec, cb) {
    let body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        let params;
        if(body!==""){
            params = JSON.parse(body);
        }
        cb(null, params);
    })
}
function getHandler(url) {

}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});