module.exports.signIn = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.render('sign_in',{
        title: "innohunt sign-in"
    });
}

module.exports.signUp = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.render('sign_up',{
        title: "innohunt sign-up"
    });
}
