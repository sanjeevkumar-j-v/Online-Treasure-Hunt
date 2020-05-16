const passport = require('passport');
const User = require("../models/user");


module.exports.start = function(req, res){

    return res.render('playground',{
        title: "start game"
    });
}
module.exports.check = function(req, res){
    // console.log(req.body)
    if((req.body.password).trim().toLowerCase().split(" ").join("") == 'treasurehunt'){
        return res.render('correct',{
            title: "correct answer"
        });
    }else{
        return res.render('wrong',{
            title: "Wrong answer"
        });
    }
}

module.exports.unavail = function(req, res){

    if(req.cookies.user_id){

        User.findById(req.cookies.user_id, function(err, user) {
            if(err){
                console.log("Error in finding user on checking level")
                return res.redirect('/');
            }
            if(user.level == 1){
                return res.render('playground_unavailable',{
                    title: "Unavailable"
                });
            }else{
                return res.redirect('/playground');
            }
        });

    }
    return res.redirect('/users/sign-in');

   
}

// module.exports.signUp = function(req, res){
//     return res.render('pl',{
//         title: "current level"
//     });
// }
