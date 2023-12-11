import type Answer from "./Answer"

export default interface Question {
    id: number
    question: string
    answers: [Answer]
    desc: string
    type: string
}