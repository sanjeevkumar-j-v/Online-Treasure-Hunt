const passport = require('passport');
const User = require("../models/user");
const Two = require("../models/two");

module.exports.wait = function(req, res){

    return res.render('wait_playground',{
        title: "Successful registration"
    });
}
module.exports.start = function(req, res){

    return res.render('new',{
        title: "play game"
    });
}
module.exports.check = function(req, res){
    // console.log(req.body)
    if((req.body.password).trim().toLowerCase().split(" ").join("") == 'lovnablago'){

        // User.updateOne( {_id: req.cookies.user_id},{password: 121} ,function(err) {
        //     if(err){
        //         console.log("Error on changing user level")
        //     }

        // });
        User.findByIdAndUpdate( {_id: req.user.id}, {level: 2}, function(err, result){
            // console.log(result);
        });
        Two.insertMany({email: req.user.email, name: req.user.name});
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
            // if(user.level == 1){
            //     return res.render('playground_unavailable',{
            //         title: "Unavailable"
            //     });
            // }else{
                return res.redirect('/playground');
            // }
        });

    }
    return res.redirect('/users/sign-in');

   
}

// module.exports.signUp = function(req, res){
//     return res.render('pl',{
//         title: "current level"
//     });
// }
