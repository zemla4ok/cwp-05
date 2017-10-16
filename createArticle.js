const log = require('./log');
const file = require('fs').createWriteStream('logfile.log');
let articles = require('./articles.json');

module.exports.createArticle = function createArticle(req, res, payload, cb) {
    payload.id = Date.now();
    articles.push(payload);
    log.log(file, '/api/articles/create', payload);
    cb(null, payload);
}