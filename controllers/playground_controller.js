const passport = require('passport');
const User = require("../models/user");
const Eight = require("../models/eight");

module.exports.wait = function(req, res){

    return res.render('wait_playground',{
        title: "Successful registration"
    });
}

module.exports.start = function(req, res){
    User.findById(req.user.id, function(err, user){

        // if(user.rollno){
            return res.render('playground',{
                title: "play game"
            });
  
    })
    
}
module.exports.fcheck = function(req, res){

    if(req.user.level == 7){
        if(!req.user.final){
                
            if((req.body.password).trim().toLowerCase().split(" ").join("") == 'mjbcmd'){
                // cartoon
                User.findByIdAndUpdate( {_id: req.user.id}, {final: 1}, function(err, result){ });

                // fone.insertMany({email: req.user.email, name: req.user.name});

                return res.render('fcorrect',{
                    title: "correct answer"
                });

            }else{
                return res.render('wrong',{
                    title: "Wrong answer"
                });
            }

        }else if(req.user.final == 1){
                
            if((req.body.password).trim().toLowerCase().split(" ").join("") == 'iimnmm'){
                // gibberish
                User.findByIdAndUpdate( {_id: req.user.id}, {final: 2}, function(err, result){ });

                // fone.insertMany({email: req.user.email, name: req.user.name});

                return res.render('fcorrect',{
                    title: "correct answer"
                });

            }else{
                return res.render('wrong',{
                    title: "Wrong answer"
                });
            }

        }else if(req.user.final == 2){
                
            if((req.body.password).trim().toLowerCase().split(" ").join("") == 'trkil'){
                // ingredients
                User.findByIdAndUpdate( {_id: req.user.id}, {final: 3}, function(err, result){ });

                // fone.insertMany({email: req.user.email, name: req.user.name});

                return res.render('fcorrect',{
                    title: "correct answer"
                });

            }else{
                return res.render('wrong',{
                    title: "Wrong answer"
                });
            }

        }else if(req.user.final == 3){
                
            if((req.body.password).trim().toLowerCase().split(" ").join("") == 'imiirem'){

                User.findByIdAndUpdate( {_id: req.user.id}, {final: 4}, function(err, result){ });

                // fone.insertMany({email: req.user.email, name: req.user.name});

                return res.render('fcorrect',{
                    title: "correct answer"
                });

            }else{
                return res.render('wrong',{
                    title: "Wrong answer"
                });
            }

        }else if(req.user.final == 4){
                
            if((req.body.password).trim().toLowerCase().split(" ").join("") == '331526193226'){

                User.findByIdAndUpdate( {_id: req.user.id}, {final: 5}, function(err, result){ });

                // fone.insertMany({email: req.user.email, name: req.user.name});

                return res.render('fcorrect',{
                    title: "correct answer"
                });

            }else{
                return res.render('wrong',{
                    title: "Wrong answer"
                });
            }

        }else{
            return res.redirect('/playground');
        }


    }else{
        return res.redirect('/playground');
    }

}
module.exports.check = function(req, res){
    // console.log(req.body)
    if((req.body.password).trim().toLowerCase().split(" ").join("") == 'thesarunvenari'){

        // User.updateOne( {_id: req.cookies.user_id},{password: 121} ,function(err) {
        //     if(err){
        //         console.log("Error on changing user level")
        //     }

        // });

        if(req.user.level != 99){
            User.findByIdAndUpdate( {_id: req.user.id}, {level: 7}, function(err, result){
                // console.log(result);
            });
        }
        Eight.insertMany({email: req.user.email, name: req.user.name});
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
