import nodemailer from "nodemailer";


export async function sendEmail(dest, subject, message, attachments = []) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDEREMAIL, // generated ethereal user
            pass: process.env.SENDEREMAILPASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Route academy" <${process.env.SENDEREMAIL}>`, // sender address
        to: dest, // list of receivers
        subject, // Subject line
        html: message,
        attachments
    });
    console.log(info);
}
