import { randomize } from "../functions/randomize"
import modelAnswer from "./answer"

export default class modelQuestion {
    #id: number
    #asking: string
    #answers: modelAnswer[]
    #hit: boolean
    // #ansered: boolean

    constructor(id: number, asking: string, answers: modelAnswer[], hit=false) {
        this.#id = id
        this.#asking = asking
        this.#answers = answers
        this.#hit = hit
    }

    get id() {
        return this.#id
    }

    get asking() {
        return this.#asking
    }

    get answers() {
        return this.#answers
    }

    get hit() {
        return this.#hit
    }

    get answered() {
        
        for(let answer of this.#answers) {
            if(answer.reveal) return true
        }
        
        return false
    }

    replyWith(index: number): modelQuestion {
        const hited = this.#answers[index]?.correct

        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i 
            const doReveal = selectedAnswer || answer.correct
            return doReveal ? answer.revealAnswer() : answer
        })


        return new modelQuestion(this.#id, this.#asking, answers, hited)
    }


    randomizeAnswers() {
        let answersRandom = randomize(this.#answers)
        return new modelQuestion(this.#id, this.#asking, answersRandom, this.#hit)
    }

    toObject() {
        return {
            id : this.#id,
            asking : this.#asking,
            answers : this.#answers.map(resp => resp.toObject()),
            answered: this.answered,
            hit : this.#hit,
        }
    }
}