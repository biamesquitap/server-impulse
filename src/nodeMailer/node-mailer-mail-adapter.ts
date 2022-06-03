import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e7574f5d3d3dbe",
    pass: "993d761d6cb18f"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail( subject, body) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Beatriz <biamesquitap@gmail.com>',
      subject: subject,
      html: body,
    });
  };
}