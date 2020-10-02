
module.exports.index = (req, res) =>{
    res.render('index', {
        title:"Welcome"
    })
}
module.exports.postLogin = (req, res) =>{
    console.log("dang nhap thanh cong")
}
module.exports.getLogin = (req, res) =>{
    res.render('login', {
        title : "Login"
    });
}
module.exports.postLogin = (req, res) =>{
    let username= req.body.username;
    let password= req.body.password;
    console.log(username);
    
    res.render('login', {
        title : "thanh cong"
    });
}
module.exports.getRegister = (req, res)=>{
    res.render('register', {
        title:"Register",
        err: ''
    })
}
module.exports.postRegister = (req, res)=>{
    var err;
    if(!req.body.username ||!req.body.password || !req.body.repassword ){
        err ='Nhập tất cả các trường!';
    }
    if( err!=''){
        res.render('register',{
            title: 'Register',
            err : err,
            err1 :"loi"
        });
        return;
    }


}
// module.exports.index = (req, res) =>{
//     res.render('index', {
//         title:"Welcome"
//     })
// }
