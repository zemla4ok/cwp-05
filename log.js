module.exports.log=function log(file, url, data) {
    const currentDate = new Date();
    file.write(`\t${currentDate.getDay()+1}.${currentDate.getMonth()+1}.${currentDate.getFullYear()} ${currentDate.getHours()}:
                ${currentDate.getMinutes()}:${currentDate.getSeconds()}\n
                URL: ${url}\n
                Request: ${JSON.stringify(data)}\n
                ********************************************\n`)
}