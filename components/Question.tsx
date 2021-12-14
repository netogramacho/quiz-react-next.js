import modelQuestion from "../model/question";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Asking from "./Asking";

interface QuestionProps {
    value: modelQuestion
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function answerRender() {
        return question.answers.map((answer, i) => {
            return <Answer 
                    key={i}
                    value={answer}
                    index={i}
                    char="A"
                    charBackgroundColor="#F2C866"
                />
        })
    }

    return(
        <div className={styles.question}>
            <Asking text={question.asking}/>
            {answerRender()}
        </div>
    )
}