import questions from '../questionsBase'

export default (req, res) => {
    const idSelected = +req.query.id;

    const selectedQuestion = questions.filter(question => question.id === idSelected);

    if(selectedQuestion.length > 0) {
        const returnQuestion = selectedQuestion[0].randomizeAnswers()
        res.status(200).json(returnQuestion.toObject())
    } else {
        res.status(204).send()
    }

}