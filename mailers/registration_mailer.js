const nodeMailer = require('../config/nodemailer');



exports.accCreated = (user) => {
    let htmlString = nodeMailer.renderTemplate({user: user}, '/reg/reminder.ejs')

    console.log("At acc created - user", user, user.email)
    nodeMailer.transporter.sendMail({
        from: 'sanjeevkumarjv@gmail.com',
        to: user.email,
        subject: "Inno Hunt",
        html: "<h1>mailer is working</h1>"//htmlString
    }, (err, info) => {
        if(err) { console.log('Error in sending mail', err); return;}

        console.log('Message sent', info);
        return; 
    });
}