module.exports = function range(req,res,next){
    // res.headers.add( 'Access-Control-Expose-Headers', 'Content-Range')
    // res.headers.add('Content-Range','bytes : 0-20/*')
    next();
}