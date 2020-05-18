const nodeMailer = require('../config/nodemailer');



exports.accCreated = (user) => {
    let htmlString = nodeMailer.renderTemplate({user: user}, '/reg/reminder.ejs')
    htmlString = "<h4>Hey "+user.name+ ",</h4> <br> <h1>Your registration for the online treasure hunt is confirmed.</h1>"
    console.log("At acc created - user", user, user.email)
    nodeMailer.transporter.sendMail({
        from: 'sanjeevkumarjv@gmail.com',
        to: user.email,
        subject: "Inno Hunt",
        html: htmlString
    }, (err, info) => {
        if(err) { console.log('Error in sending mail', err); return;}

        console.log('Message sent', info);
        return; 
    });
}