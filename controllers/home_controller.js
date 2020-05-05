

module.exports.home = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.render('home',{
        title: "innohunt"
    });
}
