import modelAnswer from "../model/answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
    value: modelAnswer,
    index: number,
    char: string,
    charBackgroundColor: string

}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return (
        <div className={styles.answer}>
            <div className={styles.answerContent}>
                <div className={styles.front}>
                    <div className={styles.char}
                    style={{
                        backgroundColor:props.charBackgroundColor
                    }}>
                        {props.char}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}></div>
            </div>
        </div>
    )
}