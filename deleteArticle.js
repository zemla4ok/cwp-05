const log = require('./log');
const file = require('fs').createWriteStream('logfile.log');
let articles = require('./articles.json');

module.exports.deleteArticle = function deleteArticle(req, res, payload, cb) {
    let ind = articles.findIndex(i => i.id == payload.id);
    if (ind != -1) {
        articles.splice(ind, 1);
        log.log(file, '/api/articles/delete', payload);
        cb(null, articles[ind]);
    }
    else {
        cb('err');
    }
}