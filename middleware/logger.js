

function log(req, res, next) {
    console.log(`Logger Middleware...`);
    next();
}



module.exports = log;