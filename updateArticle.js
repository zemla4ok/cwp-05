const log = require('./log');
const file = require('fs').createWriteStream('logfile.log');
let articles = require('./articles.json');

module.exports.updateArticle = function updateArticle(req, res, payload, cb) {
    let ind =articles.findIndex(i=>i.id == payload.id);
    if(ind!=-1){
        articles.splice(ind, 1, payload);
        log.log(file, '/api/articles/update', payload);
        cb(null, articles[ind]);
    }
    else{
        cb('err');
    }
}