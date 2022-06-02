
import express from 'express';
import nodemailer from 'nodemailer';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma-feedbacks-repository';

export const routes = express.Router()

const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e7574f5d3d3dbe",
    pass: "993d761d6cb18f"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

const prismaFeedbacksRepository  = new PrismaFeedbacksRepository()
const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository) 

await submitFeedbackUseCase.execute({
  type,
  comment,
  screenshot,
})


 /* 
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Beatriz <biamesquitap@gmail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p> Tipo do feedbak: ${type} </p>`,
      `<p> Comentário: ${comment} </p>`,
    ].join('\n')
  });
*/

  return res.status(201).send();
});
