import nodemailer from 'nodemailer';
import { message } from '../views/pages.js';
// mail transporter
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

export async function sendConfirmation(name, email, key) {
   // send mail with defined transport object
    let info = await transport.sendMail({
    from: "octaviart.org", // sender address
    to: email, // list of receivers
    subject: "We've Reveived Your Commission Request!", // Subject line
    html: message(name, key), // html body
  });
}