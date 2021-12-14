import Question from "../components/Question";
import modelAnswer from "../model/answer";
import modelQuestion from "../model/question";


export default function Home() {
  const testQuestion = new modelQuestion(1, 'Melhor Cor?', [
      modelAnswer.incorrect('Verde'),
      modelAnswer.incorrect('Azul'),
      modelAnswer.incorrect('Preto'),
      modelAnswer.correct('Vermelho')
  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={testQuestion} />
    </div>
  )
}
