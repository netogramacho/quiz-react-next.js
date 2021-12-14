import modelQuestion from "../../model/question";
import modelAnswer from "../../model/answer";

const questions: modelQuestion[] = [
    new modelQuestion(306, 'Qual bicho transmite a Doença de Chagas?', [
        modelAnswer.incorrect('Abelha'),
        modelAnswer.incorrect('Barata'),
        modelAnswer.incorrect('Pulga'),
        modelAnswer.correct('Barbeiro'),
    ]),
    new modelQuestion(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        modelAnswer.incorrect('Caju'),
        modelAnswer.incorrect('Côco'),
        modelAnswer.incorrect('Chuchu'),
        modelAnswer.correct('Abóbora'),
    ]),
    new modelQuestion(203, 'Qual é o coletivo de cães?', [
        modelAnswer.incorrect('Manada'),
        modelAnswer.incorrect('Alcateia'),
        modelAnswer.incorrect('Rebanho'),
        modelAnswer.correct('Matilha'),
    ]),
    new modelQuestion(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        modelAnswer.incorrect('Equilátero'),
        modelAnswer.incorrect('Isóceles'),
        modelAnswer.incorrect('Trapézio'),
        modelAnswer.correct('Escaleno'),
    ]),
    new modelQuestion(205, 'Quem compôs o Hino da Independência?', [
        modelAnswer.incorrect('Castro Alves'),
        modelAnswer.incorrect('Manuel Bandeira'),
        modelAnswer.incorrect('Carlos Gomes'),
        modelAnswer.correct('Dom Pedro I'),
    ]),
    new modelQuestion(206, 'Qual é o antônimo de "malograr"?', [
        modelAnswer.incorrect('Perder'),
        modelAnswer.incorrect('Fracassar'),
        modelAnswer.incorrect('Desprezar'),
        modelAnswer.correct('Conseguir'),
    ]),
    new modelQuestion(207, 'Em que país nasceu Carmen Miranda?', [
        modelAnswer.incorrect('Argentina'),
        modelAnswer.incorrect('Espanha'),
        modelAnswer.incorrect('Brasil'),
        modelAnswer.correct('Portugal'),
    ]),
    new modelQuestion(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        modelAnswer.incorrect('Costa e Silva'),
        modelAnswer.incorrect('Emílio Médici'),
        modelAnswer.incorrect('Ernesto Geisel'),
        modelAnswer.correct('João Figueiredo'),
    ]),
    new modelQuestion(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        modelAnswer.incorrect('Ás'),
        modelAnswer.incorrect('Nove'),
        modelAnswer.incorrect('Rei'),
        modelAnswer.correct('Valete'),
    ]),
    new modelQuestion(210, 'O adjetivo "venoso" está relacionado a:', [
        modelAnswer.incorrect('Vela'),
        modelAnswer.incorrect('Vento'),
        modelAnswer.incorrect('Vênia'),
        modelAnswer.correct('Veia'),
    ]),
    new modelQuestion(211, 'Que nome se dá à purificação por meio da água?', [
        modelAnswer.incorrect('Abrupção'),
        modelAnswer.incorrect('Abolição'),
        modelAnswer.incorrect('Abnegação'),
        modelAnswer.correct('Ablução'),
    ]),
    new modelQuestion(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        modelAnswer.incorrect('Monte Branco'),
        modelAnswer.incorrect('Monte Fuji'),
        modelAnswer.incorrect('Monte Carlo'),
        modelAnswer.correct('Monte Everest'),
    ]),
    new modelQuestion(213, 'Em que parte do corpo se encontra a epiglote?', [
        modelAnswer.incorrect('Estômago'),
        modelAnswer.incorrect('Pâncreas'),
        modelAnswer.incorrect('Rim'),
        modelAnswer.correct('Pescoço'),
    ]),
    new modelQuestion(214, 'A compensação por perda é chamada de...', [
        modelAnswer.incorrect('Déficit'),
        modelAnswer.incorrect('Indexação'),
        modelAnswer.incorrect('Indébito'),
        modelAnswer.correct('Indenização'),
    ]),
    new modelQuestion(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        modelAnswer.incorrect('Cuca'),
        modelAnswer.incorrect('Curupira'),
        modelAnswer.incorrect('Boitatá'),
        modelAnswer.correct('Saci-pererê'),
    ]),
    new modelQuestion(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        modelAnswer.incorrect('Marechal Deodoro'),
        modelAnswer.incorrect('Barão de Mauá'),
        modelAnswer.incorrect('Marquês de Pombal'),
        modelAnswer.correct('Duque de Caxias'),
    ]),
]

export default questions