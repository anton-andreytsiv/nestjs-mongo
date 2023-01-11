
import * as mongoose from 'mongoose';

const Answers  = new mongoose.Schema({
  answer: String
})
Answers.set('toJSON', { getters: true });

const Questions  = new mongoose.Schema({
  question: String,
  answers: [Answers]
})
Questions.set('toJSON', { getters: true });

export const ListSchema  = new mongoose.Schema({
  title: { type: String, require: true},
  questions: [Questions]
})

interface IAnswers{
  answer: string
}
interface IQuestions{
  question: string
  answers: IAnswers[]
}

export interface IList {
  title: string
  questions: IQuestions[]
}