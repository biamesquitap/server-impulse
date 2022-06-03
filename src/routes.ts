
import express from 'express';
import nodemailer from 'nodemailer';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma-feedbacks-repository';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

const prismaFeedbacksRepository  = new PrismaFeedbacksRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()
const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository,
  nodemailerMailAdapter
) 

await submitFeedbackUseCase.execute({
  type,
  comment,
  screenshot,
})

  return res.status(201).send();
});
