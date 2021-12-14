import modelQuestion from "./question"

export default class modelAnswer {
    #value: string
    #correct: boolean
    #reveal: boolean


    constructor(value: string, correct: boolean, reveal = false) {
        this.#value = value
        this.#correct = correct
        this.#reveal = reveal
    }

    static correct(value: string) {
        return new modelAnswer(value, true)
    }

    static incorrect(value: string) {
        return new modelAnswer(value, false)
    }

    get value() {
        return this.#value
    }

    get correct() {
        return this.#correct
    }

    get reveal() {
        return this.#reveal
    }

    revealAnswer(): modelAnswer{
        return new modelAnswer(this.#value, this.#correct, true)
    }

    toObject() {
        return {
            value : this.#value,
            correct : this.#correct,
            reveal : this.#reveal
        }
    }
}