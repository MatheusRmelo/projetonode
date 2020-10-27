exports.userMiddleware = (req, res, next) => {

    let info = {name: 'Matheus', id: 123};

    req.userInfo = info;

    next();
}
exports.index =  (req, res)=>{
    let obj =  {
        title: 'Título de teste',
        userInfo:req.userInfo
    } 
    res.render('home', obj);
}