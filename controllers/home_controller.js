

module.exports.home = function(req, res){
    return res.render('wait');
    // return res.render('end',{
    //     title: "innohunt"
    // });
}

module.exports.back = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.redirect('/playground/');
}


module.exports.reminder = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.render('reminder',{
        title: "innohunt"
    });
}

module.exports.testing = function(req, res){
    return res.render('end');
}

